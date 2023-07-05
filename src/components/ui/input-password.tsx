'use client'

import { forwardRef, useState } from 'react'
import { Eye, EyeSlash } from 'iconsax-react'

import { cn } from '@/lib/utils'

import { Input, InputProps } from './input'

export const InputPassword = forwardRef<HTMLInputElement, InputProps>(
  function InputPassword({ className, type, ...props }, ref) {
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
      setShowPassword(!showPassword)
    }

    return (
      <div className={cn(className, 'relative')}>
        <Input
          {...props}
          ref={ref}
          className="pr-12"
          autoComplete="current-password"
          type={showPassword ? 'text' : 'password'}
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute right-4 top-1/2 -translate-y-1/2"
        >
          {showPassword ? <EyeSlash /> : <Eye />}
        </button>
      </div>
    )
  }
)
