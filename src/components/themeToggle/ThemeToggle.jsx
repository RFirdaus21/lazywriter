import React from 'react'
import style from './themeToggle.module.css'
import Image from 'next/image'

const ThemeToggle = () => {
  
  return (
    <div className={style.container}>
        <Image src= '/light-mode.png' alt="" width={16} height={16}/>
        <div className={style.ball}></div>
        <Image src= '/dark-mode.png' alt="" width={16} height={16}/>
    </div>
  )
}

export default ThemeToggle
