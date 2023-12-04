import Image from "next/image";
import { useState } from "react";
import ProfileModal from "../modals/profileModal";

import style from './image.module.css'

export default function ImageProfile({ image }) {
  const [viewModal, setViewModal] = useState(false)

  const openAndCloseModal = () => {
    setViewModal(!viewModal)
  }

  return (
    <>
      <div className={style.imageContainer} onClick={openAndCloseModal}>
        <Image src={image} width={40} height={40} alt="profile" />

      </div>
      {viewModal && <ProfileModal close={openAndCloseModal} />}
    </>
  )
}
