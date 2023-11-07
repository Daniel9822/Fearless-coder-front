import Link from 'next/link'
import Logo from '../logo/logo'
import style from './Nav.module.css'
import HandleSession from '../buttons/HandleSession'

export default function Nav() {
  return (
    <div className={style.navContainer}>
      <div className={style.navItems}>
        <Link href={'/'} className={style.logo}>
          <Logo />
        </Link>

        <ul className={style.navList}>
          <li>Informacion</li>
          <li>Salas</li>
          <li className={style.singUp}>
            <HandleSession />
          </li>
        </ul>
      </div>
    </div>
  )
}