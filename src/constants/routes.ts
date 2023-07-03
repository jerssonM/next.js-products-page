export const ROUTES = {
  WELCOME: '/',
  STORE: '/store',
  LOGIN: '/login',
}

export type Route = (typeof ROUTES)[keyof typeof ROUTES]
