import { BsDoorOpen } from 'react-icons/bs'
import Filters from './filters'
import style from './interviews.module.css'
import { interviewsMock } from './mock'
import { GoIssueTrackedBy } from 'react-icons/go'
import { axiosConfig } from '@/utils/axios-config'

const getInterviews = async () => {
  const { data } = await axiosConfig.get(`${process.env.SERVER_URL}/interview`)
  return data
}

export default async function Interviews() {
  const data = await getInterviews()
  console.log(data);
  return (
    <article className={style.wrapper}>
      <div className={style.container}>
        <div className={style.header}>
          <h3 className={style.title}>Entrevistas</h3>
          <Filters />
        </div>

        <aside className={style.interviewsContainer}>
          {interviewsMock.map((interview) => {
            return (
              <div key={interview.id} className={style.interview}>
                <h4 className={style.interviewTitle}>{interview.title}</h4>
                <div className={style.buttons}>
                  <button className={style.issue}>
                    <GoIssueTrackedBy size={20} />
                    <span>Tematica</span>
                  </button>
                  <button
                    className={
                      interview.status === 'wait' ? style.open : style.disable
                    }
                  >
                    <BsDoorOpen size={20} />
                    <span>Etrar</span>
                  </button>
                </div>

                <span className={style.circle}>
                  {' '}
                  {interview.status === 'current'
                    ? 'En proceso'
                    : 'En espera'}{' '}
                </span>
              </div>
            )
          })}
        </aside>
      </div>
    </article>
  )
}
