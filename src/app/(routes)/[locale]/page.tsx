"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()
  console.log(session)
  console.log(status)

  return (
    <main>
      <h1>Next.js Boilerplate</h1>
      <Link href={"/register"}>Register</Link>
      <Link href={"/login"}>Login</Link>
    </main>
  )
}
