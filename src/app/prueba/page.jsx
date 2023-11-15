'use client'

import { useUserContext } from '@/context/userContex'
import style from './rooms.module.css'
import UserInfo from '@/components/userInfo/UserInfo'
import Information from '@/components/informations/Information'
import Interviews from '@/components/interviews/Interviews'
import Questions from '@/components/questions/Questions'

export default function page() {
  const { userActual } = useUserContext()

  return (
    <section className={style.wrapper}>
      <UserInfo userActual={userActual} />
      <Information/>
      <Questions />
      <Interviews/>
    </section>
  )
}
