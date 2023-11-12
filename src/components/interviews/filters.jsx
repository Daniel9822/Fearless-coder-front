import style from './interviews.module.css'

export default function Filters() {
  return (
    <label className={style.filters} htmlFor='filter'>
      filtrar
      <select id='filter'>
        <option value='all'>Todas</option>
        <option value='current'>En curso</option>
        <option value='wait'>En espera</option>
      </select>
    </label>
  )
}
