import Link from 'next/link'
import { Login } from 'iconsax-react'

import { cn } from '@/lib/utils'
import { CONSTANTS } from '@/constants'
import { Button, Logo } from '@/components/ui'

import styles from './page.module.css'

const HomePage = () => (
  <section
    className={cn(
      'h-full bg-orange-200 flex justify-center items-center text-center',
      styles['welcome__image-background']
    )}
  >
    <div className="z-10">
      <Logo className="mb-8" />
      <Link href={CONSTANTS.ROUTES.LOGIN}>
        <Button className="w-40">
          <span className="mr-2">Login</span>
          <Login size={20} />
        </Button>
      </Link>
    </div>
  </section>
)

export default HomePage
