import Image from "next/image";
import { useState } from "react";
import ProfileModal from "../modals/profileModal";

import style from './image.module.css'

export default function ImageProfile({ src }) {
  const [viewModal, setViewModal] = useState(false)

  const openAndCloseModal = () => {
    setViewModal(!viewModal)
  }

  return (
    <>
      <div className={style.imageContainer} onClick={openAndCloseModal}>
        <Image src={src} width={40} height={40} alt="profile" />

      </div>
      {viewModal && <ProfileModal close={openAndCloseModal} />}
    </>
  )
}
