'use client'
import { z } from 'zod'
import Image from 'next/image'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import { cn } from '@/lib/utils'
import { CONSTANTS } from '@/constants'
import { useFetch } from '@/hooks/useFetch'
import { Credentials } from '@/services/fake-store/types'

import styles from './auth-login-form.module.css'
import { Input, Button, Label, Checkbox, Loader } from '../ui'

const formSchema = z.object({
  username: z.string().nonempty('Username is required'),
  password: z.string().nonempty('Password is required'),
  terms: z.boolean().refine((val) => !!val, {
    message: 'You must accept the terms and conditions',
  }),
})
const formDefaultValues = {
  username: 'mor_2314',
  password: '83r5^_',
  terms: false,
}

type FormValues = z.infer<typeof formSchema>

export const AuthLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
  })
  const { onChange: onChangeCheckbox, ...checkboxRegister } = register('terms')
  const router = useRouter()
  const [showLoginError, setShowLoginError] = useState(false)
  const { execute, isLoading } = useFetch()

  const onSubmit = async (data: Credentials) => {
    const response = await execute(
      signIn('credentials', {
        ...data,
        redirect: false,
      })
    )
    if (response?.error) {
      setShowLoginError(true)
      return
    }
    router.push(CONSTANTS.ROUTES.STORE)
  }

  return (
    <div className="h-full flex flex-col justify-center items-center px-8 w-full  md:w-6/12 ">
      <div className="w-full relative">
        <Image
          className={cn(
            'absolute left-1/2 transform -translate-x-1/2',
            styles['shopping-cart-image']
          )}
          width={250}
          height={250}
          priority
          src="/img/shopping-cart.svg"
          alt="shopping cart"
        />
        <h1 className="font-semibold text-3xl mb-14 drop-shadow-md animate-bounce text-center">
          Shop <span className="text-orange-500">Genius</span>
        </h1>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="mb-4">
            <Label htmlFor="username">Username</Label>
            <Input
              {...register('username')}
              autoComplete="username"
              disabled={isLoading}
            />
            {errors.username && (
              <span className="block text-xs text-red-500 mt-1">
                {errors.username.message}
              </span>
            )}
          </fieldset>
          <fieldset className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              {...register('password')}
              autoComplete="current-password"
              type="password"
              disabled={isLoading}
            />
            {errors.password && (
              <span className="text-xs text-red-500 mt-1">
                {errors.password.message}
              </span>
            )}
          </fieldset>
          <fieldset className="mb-6">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                disabled={isLoading}
                {...checkboxRegister}
                onCheckedChange={(value) =>
                  onChangeCheckbox({
                    target: { value, name: 'terms' },
                  })
                }
              />
              <label htmlFor="terms">Accept terms and conditions</label>
            </div>
            {errors.terms && (
              <span className="text-xs text-red-500 mt-1 block">
                {errors.terms.message}
              </span>
            )}
          </fieldset>
          <Button
            size="full"
            type="submit"
            disabled={isLoading}
            LeftIcon={isLoading && <Loader />}
          >
            Login
          </Button>
          {showLoginError && (
            <span className="text-xs text-red-500 mt-2">
              Invalid username or password
            </span>
          )}
        </form>
      </div>
    </div>
  )
}
