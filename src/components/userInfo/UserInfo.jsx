import Image from 'next/image'
import style from './userInfo.module.css'
import { AiOutlineSetting } from 'react-icons/ai'
import { RiComputerLine } from 'react-icons/ri'
import { VscFeedback } from 'react-icons/vsc'
import { TbDeviceComputerCamera } from 'react-icons/tb'

export default function UserInfo({ userActual }) {
  return (
    <article className={style.userInfo}>
      <div className={style.banner} />
      <div className={style.container}>
        <div className={style.profileContainer}>
          <Image
            className={style.profile}
            width={80}
            height={80}
            src={userActual?.profile || '/interview.avif'}
            alt='profile'
          />

          <span>{userActual.name || 'Usuario desconocido'}</span>
          <span className={style.config}>
            <AiOutlineSetting className={style.icon} size={35} />
          </span>
        </div>

        <label className={style.role} htmlFor='rol'>
          Elegir rol
          <select id='rol'>
            <option value='dev'>Desarrollador</option>
            <option value='dev'>Reclutador</option>
          </select>
        </label>

        <aside className={style.activityContainer}>
          <h4 className={style.title}>Mi actividad</h4>
          <div className={style.icons}>
            <div>
              <span>
                <VscFeedback className={style.icon} size={40} />
              </span>
              <span>FeedBack</span>
            </div>
            <div>
              <span>
                <RiComputerLine className={style.icon} size={40} />
              </span>
              <span>Entrevistas</span>
            </div>
            <button className={style.createInterview}>
              <span>
                <TbDeviceComputerCamera className={style.icon} size={40} />
              </span>
              <span>Crear entrevista</span>
            </button>
          </div>
        </aside>
      </div>
    </article>
  )
}
