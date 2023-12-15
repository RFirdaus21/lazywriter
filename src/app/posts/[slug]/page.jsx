'use client'

import React from 'react'
import style from './singlePage.module.css'
import Image from 'next/image'

const getData = async (slug)=> {
  const res = await fetch (`https://lazywriter.vercel.app/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
}

const SinglePage = async ({params}) => {
  const {slug} = params;
  const data = await getData(slug);
  
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <div className={style.textContainer}>
            <h1 className={style.title}>{data?.title}</h1>
        </div>
        <div className={style.user}>
                {data?.user?.image && <div className={style.userImageContainer}>
                   <Image src={data.user.image} alt='' fill className={style.avatar} />
                </div>}
                <div className={style.userTextContainer}>
                    <span className={style.username}>{data?.user.name}</span>
                    <span className={style.date}>01.01.0001</span>
                </div>
          </div>
        {data?.img && <div className={style.imageContainer}>
            <Image src={data?.img} alt='' width={1000} height={500} className={style.image} />
        </div>}
      </div>
      <div className={style.content}>
        <div className={style.post}>
          <div className={style.description} dangerouslySetInnerHTML={{__html:data?.desc}}/>
        </div>
      </div>
    </div>
  )
}

export default SinglePage