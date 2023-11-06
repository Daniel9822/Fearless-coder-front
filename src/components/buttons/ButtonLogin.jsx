"use client";
import Link from "next/link";
import style from "./button.module.css";
import { useUserContext } from "@/context/userContex";
import { IoIosArrowDown } from 'react-icons/io'
import ImageProfile from "../imageProfile/ImageProfile";
import { useEffect } from "react";

const getUserActual = ({ email }) => {
  if (!email) return
  fetch(`http://localhost:3001/user/${email}`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => {
      console.log(err)
      return null
    }
    )
}

export default function ButtonLogin() {
  const { userActual, addUserInfo } = useUserContext();
  const userLocal = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (userLocal?.email) {
      getUserActual({ email: userLocal.email }).then(res => {
        addUserInfo(res)
      })
    }
  }, [])

  return (
    <>
      {!userActual?.id && !userActual?.id ? (
        <Link href={"http://localhost:3001/auth/google"}>Iniciar session</Link>
      ) : (
        <div className={style.imageContainer}>
          <ImageProfile src={userActual.profile} />

          <span>{<IoIosArrowDown size={20} />}</span>
        </div>
      )}
    </>
  );
}
