import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { CONSTANTS } from '@/constants'
import { login } from '@/services/fake-store/login.service'

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: CONSTANTS.ROUTES.LOGIN,
    signOut: CONSTANTS.ROUTES.WELCOME,
    error: CONSTANTS.ROUTES.LOGIN,
  },
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'user',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await login(credentials!)

        if (user) {
          return { ...user, id: String(user.id) }
        }
        return null
      },
    }),
  ],
  callbacks: {
    async redirect({ url }) {
      return url
    },
  },
}
