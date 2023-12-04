'use client'

import { useUserContext } from '@/context/userContex'
import Image from 'next/image'
import style from './userInfo.module.css'

export default function Profile() {
  const { userActual } = useUserContext()

  return (
    <>
      <Image
        className={style.profile}
        width={80}
        height={80}
        src={userActual?.profile || '/interview.avif'}
        alt='profile'
      />

      <span>{userActual.name || 'Usuario desconocido'}</span>
    </>
  )
}
