'use client'
import { useSession } from 'next-auth/react'
import { useFormState } from 'react-dom'

import { helloWorld } from '../action/serverAction'

export default function User() {
  const { data: session, status } = useSession()
  const [state, action] = useFormState(helloWorld, null)

  if (status === 'authenticated') {
    return (
      <>
        <p>Signed in as {session?.user?.email}</p>
        <a href="/login">Logout Page</a>
        <button onClick={() => action()}>call server action</button>
        <p>{JSON.stringify(state)}</p>
      </>
    )
  } else {
    return (
      <>
        <a href="/login">Login Page</a>
        <button onClick={() => action()}>call server action</button>
        <p>{JSON.stringify(state)}</p>
      </>
    )
  }
}
