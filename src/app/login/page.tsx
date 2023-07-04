import Image from 'next/image'

import WomenShoppingImg from '@/assets/women-shopping.jpg'
import { AuthLoginForm } from '@/components/auth-login-form'

const LoginPage = () => (
  <div className="h-full flex  items-center justify-center md:justify-end">
    <picture className="relative w-6/12 h-full hidden md:block">
      <Image
        fill
        priority
        alt="Women shopping"
        className="object-contain"
        src={WomenShoppingImg}
      />
    </picture>
    <div className="flex justify-center w-full md:w-6/12">
      <AuthLoginForm />
    </div>
  </div>
)

export default LoginPage
