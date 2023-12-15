import React from 'react'
import Link from 'next/link'
import style from './menuSidePost.module.css'
import Image from 'next/image'

const MenuSidePost = ({withImage}) => {
  return (
    <div className={style.items}>
    <Link href='/' className={style.item}>
    { withImage &&
        <div className={style.imageContainer}>
            <Image src='/oppenheimer.jpg'alt="" fill className={style.image}/>
        </div>}
      <div className={style.textContainer}>
        <span className={`${style.category} ${style.film}`}>
          Film dan Serial
        </span>
        <h3 className={style.postTitle}>
          Oppenheimer Cillian Murphy
        </h3>
        <div className={style.detail}>
          <span className={style.username}>Balmond Baswedan</span>
          <span className={style.date}> - 11.28.2023</span>
        </div>
      </div>
    </Link>

    <Link href='/' className={style.item}>
      { withImage &&
        <div className={style.imageContainer}>
            <Image src='/krunic.jpg'alt="" fill className={style.image}/>
        </div>}
      <div className={style.textContainer}>
        <span className={`${style.category} ${style.olahraga}`}>
          Olahraga
        </span>
        <h3 className={style.postTitle}>
          Rade Krunic si Anak Emas Stefano Pioli
        </h3>
        <div className={style.detail}>
          <span className={style.username}>Bruno Pranowo</span>
          <span className={style.date}> - 11.28.2023</span>
        </div>
      </div>
    </Link>

    <Link href='/' className={style.item}>
      {withImage &&
        <div className={style.imageContainer}>
            <Image src='/oppenheimer.jpg'alt="" fill className={style.image}/>
        </div>}
      <div className={style.textContainer}>
        <span className={`${style.category} ${style.politik}`}>
          Politik
        </span>
        <h3 className={style.postTitle}>
          Oppenheimer Cillian Murphy
        </h3>
        <div className={style.detail}>
          <span className={style.username}>Balmond Baswedan</span>
          <span className={style.date}> - 11.28.2023</span>
        </div>
      </div>
    </Link>

    <Link href='/' className={style.item}>
      {withImage &&
        <div className={style.imageContainer}>
            <Image src='/oppenheimer.jpg'alt="" fill className={style.image}/>
        </div>}
      <div className={style.textContainer}>
        <span className={`${style.category} ${style.musik}`}>
          Musik
        </span>
        <h3 className={style.postTitle}>
          Oppenheimer Cillian Murphy
        </h3>
        <div className={style.detail}>
          <span className={style.username}>Balmond Baswedan</span>
          <span className={style.date}> - 11.28.2023</span>
        </div>
      </div>
    </Link>

    <Link href='/' className={style.item}>
      {withImage &&
        <div className={style.imageContainer}>
            <Image src='/oppenheimer.jpg'alt="" fill className={style.image}/>
        </div>}
      <div className={style.textContainer}>
        <span className={`${style.category} ${style.sosial}`}>
          Sosial
        </span>
        <h3 className={style.postTitle}>
          Oppenheimer Cillian Murphy
        </h3>
        <div className={style.detail}>
          <span className={style.username}>Balmond Baswedan</span>
          <span className={style.date}> - 11.28.2023</span>
        </div>
      </div>
    </Link>
  </div>
  )
}

export default MenuSidePost
