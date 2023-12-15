import React from 'react'
import style from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const getData = async ()=> {
  const res = await fetch ("https://lazywriter.vercel.app/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed")
  }

  return res.json();
}

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={style.container}>
      <div className={style.categories}>
        {data?.map((item)=>(
          <Link href={`/blog?cat=${item.slug}`} className={`${style.category} ${style[item.slug]}`} key={item._id}>
          { item.img && <Image src={item.img} alt='' width={32} height={32} className={style.image} />}
          {item.title}
        </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
