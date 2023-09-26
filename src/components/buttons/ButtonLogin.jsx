"use client";
import Link from "next/link";
import style from "./button.module.css";
import { useUserContext } from "@/context/userContex";
import { IoIosArrowDown } from 'react-icons/io'
import ImageProfile from "../imageProfile/ImageProfile";

export default function ButtonLogin() {
  const { userActual } = useUserContext();
  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user);
  console.log(userActual);

  return (
    <>
      {!user?.id && !userActual?.id ? (
        <Link href={"http://localhost:3001/auth/google"}>Iniciar session</Link>
      ) : (
        <div className={style.imageContainer}>
          <ImageProfile src={user.profile} />

          <span>{<IoIosArrowDown size={20} />}</span>
        </div>
      )}
    </>
  );
}
