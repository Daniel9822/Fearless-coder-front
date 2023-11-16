'use client'
import { useState } from 'react'
import { questions } from './questionMock'

import style from './questions.module.css'
import QuestionsModal from '../modals/QuestionsModal'

export default function Questions() {
  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <aside className={style.questionsContainer}>
      <div className={style.container}>
        <div className={style.content}>
          <h3 className={style.title}>Preguntas frecuentes</h3>

          <ul className={style.list}>
            {questions.map((q) => (
              <li onClick={handleModal} key={q.answer}>
                {q.question}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {openModal && (
        <QuestionsModal close={handleModal} question={questions[0]} />
      )}
    </aside>
  )
}
