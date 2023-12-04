'use client'

import style from './button.module.css'
import { useUserContext } from '@/context/userContex'
import { IoIosArrowDown } from 'react-icons/io'
import ImageProfile from '../imageProfile/ImageProfile'
import { useEffect } from 'react'
import ButtonLogin from './ButtonLogin'

const getUserActual = async ({ email }) => {
  if (!email) return
  try {
    const res = await fetch(`http://localhost:3001/user/${email}`)
    const resJson = await res.json()
    return resJson
  } catch (err) {
    return null
  }
}

export default function HandleSession() {
  const { userActual, addUserInfo } = useUserContext()
  const userLocal = JSON.parse(window.localStorage.getItem('user'))

  useEffect(() => {
    if (userLocal?.email) {
      getUserActual({ email: userLocal.email }).then((res) => {
        addUserInfo(res)
      })
    }
  }, [])

  return (
    <>
      {!userActual?.id && !userLocal?.id ? (
        <ButtonLogin/>
      ) : (
        <div className={style.imageContainer}>
          <ImageProfile src={userActual?.profile} />

          <span>{<IoIosArrowDown size={20} />}</span>
        </div>
      )}
    </>
  )
}
