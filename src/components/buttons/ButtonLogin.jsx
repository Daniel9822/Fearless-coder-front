'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import style from './button.module.css'
import Image from 'next/image'

export default function ButtonLogin() {
  const searchParams = useSearchParams()
  const userId = searchParams.get('userId')
  const profile = searchParams.get('profile')
  const token = searchParams.get('token')

  return <>
    {!userId ? <Link href={'http://localhost:3001/auth/google'}>Iniciar session</Link> : <Image src={profile} width={40} height={40} className={style.profile} />}
  </>
}
