import { cn } from '@/lib/utils'
import { AuthLoginForm } from '@/components/auth-login-form'

import styles from './page.module.css'

const LoginPage = () => (
  <div
    className={cn(
      'h-full flex justify-center md:justify-end',
      styles['login__image-background']
    )}
  >
    <AuthLoginForm />
  </div>
)

export default LoginPage
