'use client'
import { signIn, signOut } from 'next-auth/react'

export default function Login() {
  return (
    <>
      <h3>Login</h3>
      <button onClick={() => signIn()}>Sign in</button>
      <h3>Logout</h3>
      <button onClick={() => signOut()}>Sign out</button>

      <h3>user page</h3>
      <a href="/user">User Page</a>
    </>
  )
}
