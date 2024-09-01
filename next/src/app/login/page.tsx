'use client'
import { signIn } from 'next-auth/react'

export default function Login() {
  return (
    <>
      <h3>Login</h3>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
