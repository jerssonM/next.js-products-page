import { Credentials, LoginResponse, User } from './types'
import { axiosFakeStoreInstance } from '../axios'

export const login = async (credentials: Credentials) => {
  try {
    const { data: authToken } =
      await axiosFakeStoreInstance.post<LoginResponse>(
        'auth/login',
        credentials
      )

    if (authToken.token) {
      const { data: users } = await axiosFakeStoreInstance.get<User[]>('users')
      const loggedUser = users.find(
        (user: User) => user.username === credentials.username
      )
      if (!loggedUser) {
        return null
      }
      return loggedUser
    }
    return null
  } catch {
    return null
  }
}
