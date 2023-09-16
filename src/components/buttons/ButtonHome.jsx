'use client'
import style from './buttonHome.module.css'
import { useRouter } from 'next/navigation'

export default function ButtonHome() {
  const router = useRouter()
  const handleNavigate = () => {
    router.push('/prueba')
  }
  return <button onClick={handleNavigate} className={style.button}>
    Empezar
  </button>
}
