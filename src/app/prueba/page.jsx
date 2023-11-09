'use client'

import { useUserContext } from '@/context/userContex'
import style from './rooms.module.css'
import Image from 'next/image'
import UserInfo from '@/components/userInfo/UserInfo'

export default function page() {
  const { userActual } = useUserContext()

  return (
    <section className={style.wrapper}>
      <UserInfo userActual={userActual}/>
      <div className={style.two}></div>
      <div className={style.tree}></div>
      <div className={style.four}></div>
    </section>
  )
}
