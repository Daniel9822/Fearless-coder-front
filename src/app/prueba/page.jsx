'use client'

import { useUserContext } from "@/context/userContex"

export default function page() {
  const { userActual } = useUserContext()
  console.log(userActual);

  return <div>page</div>
}
