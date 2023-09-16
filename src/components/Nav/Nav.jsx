import Link from 'next/link'
import Logo from '../logo/logo'
import style from './Nav.module.css'

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
          <li>Current interviews</li>
        </ul>
      </div>
    </div>
  )
}