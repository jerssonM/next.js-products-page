'use client'

import { SessionProvider } from 'next-auth/react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

type Props = {
  children?: React.ReactNode
}

export const NextAuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider>
      {children}
      <ProgressBar
        height="4px"
        color="#06b6d4"
        options={{ showSpinner: false }}
      />
    </SessionProvider>
  )
}
