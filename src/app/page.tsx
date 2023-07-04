import Link from 'next/link'
import Image from 'next/image'
import { Login } from 'iconsax-react'

import { cn } from '@/lib/utils'
import { CONSTANTS } from '@/constants'
import { Button, Logo } from '@/components/ui'

import styles from './page.module.css'

const HomePage = () => (
  <section
    className={cn(
      'h-full flex justify-end items-center text-center relative',
      styles['welcome__image-background']
    )}
  >
    <Image
      fill
      alt="Shopping online"
      src="/img/shopping-online.webp"
      className="object-contain self-start hidden md:block"
    />
    <div className="w-full md:w-6/12 z-10">
      <Logo className="mb-8 animate-bounce text-4xl" />
      <Link href={CONSTANTS.ROUTES.LOGIN}>
        <Button className="w-40">
          <span className="mr-2">Continue</span>
          <Login size={20} />
        </Button>
      </Link>
    </div>
  </section>
)

export default HomePage
