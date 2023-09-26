'use client'
import { useUserContext } from "@/context/userContex";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginParams() {
  const { userActual, addUserInfo } = useUserContext();
  console.log(userActual);

  const searchParams = useSearchParams();
  const router = useRouter();
  const userId = searchParams.get('userId');
  const profile = searchParams.get('profile');
  const token = searchParams.get('token');
  const name = searchParams.get('name');

  useEffect(() => {
    if (userId && profile && token && name) {
      const payload = {
        profile,
        token,
        id: userId,
        name
      };

      // Agrega el usuario al contexto
      addUserInfo(payload);

      console.log(userActual)

      // Guarda el usuario en localStorage
      localStorage.setItem('user', JSON.stringify(payload));

      // Redirecciona después de agregar el usuario
      router.push('/prueba');
    }
  }, [userId, profile, token, name, router]);

  return <></>;
}
