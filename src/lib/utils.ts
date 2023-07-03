import { twMerge } from 'tailwind-merge'
import { type ClassValue, clsx } from 'clsx'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const currencyFormatter = (() => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  return (value: number) => formatter.format(value)
})()
