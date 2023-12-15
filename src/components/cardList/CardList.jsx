"use client"

import React from 'react'
import Pagination from '../Pagination/Pagination'
import style from './cardList.module.css'
import Card from '../card/Card'


const getData = async (page, cat)=> {
  const res = await fetch (`https://lazywriter.vercel.app/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed")
  }

  return res.json();
}

const CardList = async({page, cat}) => {
  const {posts, count} = await getData(page, cat);
  // const POST_PER_PAGE = 3;
  // const hasPrev =   POST_PER_PAGE * (page - 1) > 0;
  // const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className={style.container}>
        <h1 className={style.title}>Post Terbaru</h1>
        <div className={style.posts}>
          {posts?.map((item) => 
            <Card item={item} key={item._id}/>
          )}
        </div>
        <Pagination page={page} />
    </div>
  )
}

export default CardList
