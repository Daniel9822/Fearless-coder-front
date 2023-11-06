import ParentModal from './parentModal'
import style from './modal.module.css'
import { useUserContext } from '@/context/userContex'

export default function ProfileModal({ close }) {
  const { userActual } = useUserContext()
  const { deleteUser } = useUserContext()
  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  const handleDeleteSession = () => {
    localStorage.removeItem('user')
    deleteUser()
  }

  return (
    <ParentModal close={close}>
      <div onClick={stopPropagation} className={style.container}>
        <span>{userActual?.name}</span>
        <button onClick={handleDeleteSession}>Cerrar session</button>
      </div>
    </ParentModal>
  )
}
