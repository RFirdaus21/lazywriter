import React from 'react'
import Pagination from '../Pagination/Pagination'
import style from './cardList.module.css'
import Card from '../card/Card'

const CardList = () => {
  return (
    <div className={style.container}>
        <h1 className={style.title}>Post Terbaru</h1>
        <div className={style.posts}>
          <Card />
          <Card />
          <Card />
        </div>
        <Pagination />
    </div>
  )
}

export default CardList
