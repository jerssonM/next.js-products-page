export interface Credentials {
  username: string
  password: string
}

export interface LoginResponse {
  token: string
}

export interface User {
  id: number
  token: string
  username: string
  password: string
  email: string
  phone: string
  address: Record<string, string>
}
