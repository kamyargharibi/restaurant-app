import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import "../assets/styles/ProductComments.css";
import Comment from "./Comment";

export default function ProductComments() {
  // Comment Component Codes >>

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastElement, setLastElement] = useState(null);
  const [page, setPage] = useState(1);

  // >> Fetching Fake API comments from jsonplaceholder <<
  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${page}`
    );

    const data = await response.json();
    data.length === 0
      ? setLastElement(null)
      : setComments((oldData) => [...oldData, ...data]);
    setLoading(false);
  };

  // >> Loading next page of comments after scroll <<
  const observerRef = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setPage((currentPage) => currentPage + 1);
    }
  });

  // >> Rerender after change value of state [page] <<
  useEffect(() => {
    fetchData();
  }, [page]);

  // >> Rerender after change value of state [lastElement] <<
  useEffect(() => {
    if (lastElement) {
      observerRef.observe(lastElement);
    }

    return () => {
      if (lastElement) {
        observerRef.unobserve(lastElement);
      }
    };
  }, [lastElement]);

  return (
    <>
      <hr />
      <div className="ProductCommentBox">
        <h2 className="commentTitle">Comments</h2>
        {comments.map((comment) => (
          <div key={comment.id} ref={setLastElement}>
            <Comment {...comment} />
          </div>
        ))}
        {loading && (
          <div className="commentLoading">
            <Oval
              height={50}
              width={50}
              color="orange"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#ffd17b"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        )}
      </div>
    </>
  );
}
