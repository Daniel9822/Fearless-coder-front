import Link from "next/link";
import ParentModal from "./parentModal";
import { FcGoogle } from 'react-icons/fc'
import style from './modal.module.css'

export default function LoginModal({ close }) {
  return <ParentModal close={close}>
    <div className={style.loginModal}>
      <Link className={style.login} href={'http://localhost:3001/auth/google'}>
        <FcGoogle/> <span>Iniciar con google</span>
      </Link>
    </div>
  </ParentModal>;
}
