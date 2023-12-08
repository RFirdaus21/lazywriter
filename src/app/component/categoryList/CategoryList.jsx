import React from 'react'
import style from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={style.container}>
      <div className={style.categories}>
          <Link href={"/blog?cat=sosial"} className={`${style.category} ${style.sosial}`}>
            <Image src='/social.png' alt='' width={32} height={32} className={style.image} />
            Sosial 
          </Link>
          <Link href={"/blog?cat=politik"} className={`${style.category} ${style.politik}`}>
          <Image src='/politik.jpg' alt='' width={32} height={32} className={style.image} />
            Politik
          </Link>
          <Link href={"/blog?cat=olahraga"} className={`${style.category} ${style.olahraga}`}>
          <Image src='/olahraga.jpg' alt='' width={32} height={32} className={style.image} />
            Olahraga
          </Link>
          <Link href={"/blog?cat=musik"} className={`${style.category} ${style.musik}`}>
          <Image src='/music.jpg' alt='' width={32} height={32} className={style.image} />
            Musik
          </Link>
          <Link href={"/blog?cat=film-serial"} className={`${style.category} ${style.film}`}>
          <Image src='/film.jpeg' alt='' width={32} height={32} className={style.image} /> 
             Film dan Serial
          </Link>
        
      </div>
    </div>
  )
}

export default CategoryList
