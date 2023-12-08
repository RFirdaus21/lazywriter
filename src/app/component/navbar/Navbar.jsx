import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../AuthLink/AuthLinks'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
          <a href='/'><h1>lazywriter</h1></a>
        </div>
        <div className={styles.links}>
            <ThemeToggle />
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/" className={styles.link}>About</Link>
            <Link href="/" className={styles.link}>Contact</Link>
            <AuthLinks />
        </div>
    </div>
  )
}

export default Navbar 