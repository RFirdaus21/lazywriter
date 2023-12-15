"use client"
import React from 'react'
import style from './loginPage.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const {data, status} = useSession();

  const router = useRouter();

  if(status === "loading"){
    return <div className={style.loading}><h1>Loading . . . .</h1> </div>
  }

  if (status === "authenticated"){
    router.push('/');
  }
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.titleText}>
            <h2 className={style.title}>Login</h2>
        </div>
        <div className={style.loginButton} onClick={() => signIn("google")} >Login menggunakan Google</div>
        <div className={style.loginButton} >Login menggunakan Facebook</div>
      </div>
    </div>
  )
}

export default LoginPage;
