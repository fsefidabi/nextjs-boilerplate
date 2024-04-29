"use client"

import React, { useState } from "react"
import { signIn } from "next-auth/react"
import { useTranslations } from "next-intl"

export default function LoginPage(props) {
  const [data, setData] = useState({
    username: "",
    password: ""
  })

  const t = useTranslations()

  function handleInputChange(e) {
    setData({
      ...data,
      [e.target.id]: e.target.value
    })
  }

  async function loginUser(e) {
    e.preventDefault()
    await signIn("credentials", {
      ...data,
      callbackUrl: "/"
    })
  }

  return (
    <>
      <form onSubmit={loginUser}>
        <div>
          <label htmlFor="username">{t("login.username")}</label>
          <input id="username" onChange={handleInputChange}/>
        </div>
        <div>
          <label htmlFor="password">{t("login.password")}</label>
          <input id="password" onChange={handleInputChange}/>
        </div>
        <button onClick={loginUser}>{t("login.signIn")}</button>
      </form>
    </>
  )
}
