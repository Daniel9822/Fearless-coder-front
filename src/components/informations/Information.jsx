import style from './information.module.css'

export default function Information() {
  return (
    <article className={style.wrapper}>
      <div className={style.container}>
        <h3 className={style.title}>Informacion</h3>

        <div className={style.info}>
            <h4>Usuarios en linea: <span>10</span></h4>
            <h4>Entrevistas en proceso: <span>5</span></h4>
            <h4>Entrevistas en espera: <span>3</span></h4>
            <h4>Ultima entrevista: <span>1 min</span></h4>
        </div>
      </div>
    </article>
  )
}
