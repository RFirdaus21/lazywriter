import React from 'react'
import style from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={style.container}>
        <div className={style.imageContainer}>
            <Image src='/oppenheimer.jpg' alt='' fill className={style.image}/>
        </div>
        <div className={style.textContainer}>
            <div className={style.detail}>
                <span className={style.date}>28.11.2023</span> 
                <span className={style.category}> - Film dan Serial</span>
            </div>
            <Link href='/'>
                <h1>Oppenheimer Cillian Murphy</h1>
            </Link>
            <p className={style.desc}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Doloribus voluptatibus quos, voluptate commodi officia dolor 
                delectus adipisci quis repellendus perspiciatis velit natus illo numquam vel sunt consequuntur cum. Dolorum, blanditiis.
            </p>
            <Link href='/' className={style.link}>Read More</Link>
        </div>
    </div>
  )
}

export default Card
