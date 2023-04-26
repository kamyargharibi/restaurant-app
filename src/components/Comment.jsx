import React from "react";
import { Profile } from "../data/Profiles";

// >> Comment Item Component <<

export default function Comment({ name, body }) {

  // >> Pick random data for users profile [ Image & Date ] <<
  const commentInfo = Profile[Math.floor(Math.random() * Profile.length)];

  return (
    <div className="commentItem">
      <img src={commentInfo.img} className="commentImage" alt={name} />
      <div className="commentItemInfo">
        <h6 className="commentName">{name}</h6>
        <p className="commentMessage">{body}</p>
        <span className="commentDate" dir="rtl">
          {commentInfo.date}
        </span>
      </div>
    </div>
  );
}
