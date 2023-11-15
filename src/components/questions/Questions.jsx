import { questions } from './questionMock'

import style from './questions.module.css'

export default function Questions() {
  return (
    <aside className={style.questionsContainer}>
      <div className={style.container}>
        <div className={style.content}>
          <h3 className={style.title}>Preguntas frecuentes</h3>

          <ul className={style.list}>
            {questions.map((q) => (
              <li key={q.answer}>{q.question}</li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}
