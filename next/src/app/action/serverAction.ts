'use server'
import { getServerSession } from 'next-auth/next'

import { authOptions } from '../api/auth/[...nextauth]/route'

export const helloWorld = () => {
  const session = getServerSession(authOptions)

  if (session) {
    return { status: 'login', session: session }
  } else {
    return { status: 'logout', session: null }
  }
}
