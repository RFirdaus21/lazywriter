import React from 'react'
import style from './menu.module.css'
import MenuSidePost from '../menuSidePost/MenuSidePost'

const Menu = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Trending</h1>
      <MenuSidePost withImage={false} />
      <h1 className={style.title}>Pilihan Editor</h1>
      <MenuSidePost withImage={true} />

    </div>
  )
}

export default Menu
