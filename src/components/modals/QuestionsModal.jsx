import React from 'react'
import ParentModal from './parentModal'

import style from './modal.module.css'

export default function QuestionsModal({ close, question }) {
  const stopPropagation = (e) => {
    e.stopPropagation()
  }
  return (
    <ParentModal close={close}>
      <section className={style.questionModalContainer} >
        <aside className={style.questionContent} onClick={stopPropagation}>
          <h3 className={style.questionTitle}>{question.question}</h3>

          <p>{question.answer}</p>
        </aside>
      </section>
    </ParentModal>
  )
}
