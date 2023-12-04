'use client'
import style from './button.module.css'
import { useRouter } from 'next/navigation'

export default function ButtonHome() {
  const router = useRouter()
  const handleNavigate = () => {
    router.push('/prueba')
  }
  return (
    <button onClick={handleNavigate} className={style.button}>
      <h3>Empezar</h3>
    </button>
  )
}
