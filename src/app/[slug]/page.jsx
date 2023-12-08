import React from 'react'
import style from './singlePage.module.css'
import Image from 'next/image'

const SinglePage = () => {
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <div className={style.textContainer}>
            <h1 className={style.title}>Cillian Murphy Oppenheimer</h1>
            <div className={style.user}>
                <div className={style.userImageContainer}>
                    <Image src='/oppenheimer.jpg' alt='' fill className={style.image} />
                </div>
                <div className={style.userTextContainer}>
                    <span>Username</span>
                    <span>01.01.0001</span>
                </div>
            </div>
        </div>
        <div className={style.imageContainer}>
            <Image src='/oppenheimer.jpg' alt='' fill className={style.image} />
        </div>
      </div>
      <div className={style.content}>
        <div className={style.post}></div>
      </div>
    </div>
  )
}

export default SinglePage