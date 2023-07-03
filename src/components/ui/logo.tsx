import { cn } from '@/lib/utils'

type LogoProps = { className?: string }

export const Logo = ({ className }: LogoProps) => (
  <h1 className={cn('font-semibold text-3xl drop-shadow-md', className)}>
    Shop <span className="text-orange-500">Genius</span>
  </h1>
)
