import Link from 'next/link'
import Logo from '../logo/logo'
import style from './Nav.module.css'
import ButtonLogin from '../buttons/ButtonLogin'

export default function Nav() {
  return (
    <div className={style.navContainer}>
      <div className={style.navItems}>
        <Link href={'/'} className={style.logo}>
          <Logo />
        </Link>

        <ul className={style.navList}>
          <li>Information</li>
          <li>Rooms</li>
          <li className={style.singUp}>
            <ButtonLogin />
          </li>
        </ul>
      </div>
    </div>
  )
}