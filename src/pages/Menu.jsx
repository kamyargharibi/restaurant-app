import React, { useState, useEffect } from 'react'
import FilterButton from '../components/FilterButton';
import MenuItem from '../components/MenuItem'
import { MenuList } from '../data/MenuList'
import ScrollToTop from "react-scroll-to-top";
import '../assets/styles/Menu.css'

export default function Menu() {

  const allCategories = ['📃 All', ...new Set(MenuList.map(item => item.category))];

  const [menuListItem, setMenuListItem] = useState(MenuList);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {

    if (button === '📃 All') {
      setMenuListItem(MenuList);
      return;
    }

    const filteredData = MenuList.filter(item => item.category === button);
    setMenuListItem(filteredData)
  }

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, [])

  return (
    <>
      <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='filterButton'>
          <FilterButton filter={filter} button={buttons} />
        </div>
        <div className='menuList'>
            {menuListItem.map((menuItem) => {
                return <MenuItem data={menuItem} key={menuItem.id} />
            })}
        </div>
        <ScrollToTop smooth color='orange' />
      </div>
    </>
  )
}
