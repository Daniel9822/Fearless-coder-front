'client'

import { useState } from 'react'
import LoginModal from '../modals/LoginModal'

export default function ButtonLogin() {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <button onClick={handleOpenModal}>Iniciar session</button>
      {
        openModal && <LoginModal close={handleOpenModal}/>
      }
    </>
  )
}
