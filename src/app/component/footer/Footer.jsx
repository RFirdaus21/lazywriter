import React from 'react'
import style from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={style.container}>
        <div className={style.infoUpper}>
          <div className={style.upperLeft}>
            <div className={style.logo}>
               {/* <Image src='/' alt='lazywriter' width={50} height={50} />  */}
              <h1 className={style.logoText}>lazywriter</h1>
            </div>
            <p className={style.desc}>Wadah bagi siapapun untuk mencurahkan pemikiran, gagasan, kritik ataupun hanya sekadar unek-uneknya dalam sebuah tulisan. </p>
          </div>
          <div className={style.upperRight}>
            <a className={style.linksTitle}>Links</a>
            <div className={style.links}>
              <Link href="/" className={style.link}>Home</Link> 
              <Link href="/" className={style.link}> About</Link> 
              <Link href="/" className={style.link}> Contact</Link>
            </div>
          </div> 
        </div>
        <div className={style.line}></div>
        <div className={style.infoLower}>
          <div className={style.copyright}>&copy; 2023 - All Rights Reserved</div>
          <div className={style.socmed}>
            <a href='https://www.instagram.com' target='_blank'>
              <Image src="/instagram.png" alt="" width={25} height={25} />
            </a>
            <a href='https://www.facebook.com' target='_blank'>
              <Image src="/facebook.png" alt="" width={25} height={25} />
            </a>
            <a href='https://www.youtube.com' target='_blank'>
              <Image src="/youtube.png" alt="" width={25} height={25} />
            </a>
          </div>
        </div>
        
    </div>
  )
}

export default Footer
