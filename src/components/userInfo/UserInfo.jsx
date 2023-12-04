import style from './userInfo.module.css'
import { AiOutlineSetting } from 'react-icons/ai'
import { activities } from '@/utils/activities'
import Profile from './profile'

export default function UserInfo() {
  return (
    <article className={style.userInfo}>
      <div className={style.banner} />
      <div className={style.container}>
        <div className={style.profileContainer}>
          <Profile/>
          <span className={style.config}>
            <AiOutlineSetting className={style.icon} size={35} />
          </span>
        </div>

        <label className={style.role} htmlFor='rol'>
          Elegir rol
          <select id='rol'>
            <option value='dev'>Desarrollador</option>
            <option value='recluter'>Reclutador</option>
          </select>
        </label>

        <aside className={style.activityContainer}>
          <h4 className={style.title}>Mi actividad</h4>
          <div className={style.icons}>
            {activities.map((ele) => {
              return (
                <button
                  key={ele.id}
                  className={
                    ele.id === 3 ? style.createInterview : style.buttonIcon
                  }
                >
                  <span>{ele.icon}</span>
                  <span>{ele.name}</span>
                </button>
              )
            })}
          </div>
        </aside>
      </div>
    </article>
  )
}
