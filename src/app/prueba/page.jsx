'use client'

import { useUserContext } from '@/context/userContex'
import style from './rooms.module.css'
import UserInfo from '@/components/userInfo/UserInfo'
import Information from '@/components/informations/Information'
import Interviews from '@/components/interviews/Interviews'

export default function page() {
  const { userActual } = useUserContext()

  return (
    <section className={style.wrapper}>
      <UserInfo userActual={userActual} />
      <Information/>
      <div className={style.tree}></div>
      <Interviews/>
    </section>
  )
}
