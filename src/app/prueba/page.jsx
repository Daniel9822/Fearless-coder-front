import style from './rooms.module.css'
import UserInfo from '@/components/userInfo/UserInfo'
import Information from '@/components/informations/Information'
import Interviews from '@/components/interviews/Interviews'
import Questions from '@/components/questions/Questions'

export default function page() {
  return (
    <section className={style.wrapper}>
      <UserInfo />
      <Information />
      <Questions />
      <Interviews />
    </section>
  )
}
