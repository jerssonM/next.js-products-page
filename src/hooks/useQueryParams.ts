import { useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { Route } from '@/constants/routes'

export const useQueryParams = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const getQueryParam = useCallback(
    (param: string) => searchParams.get(param),
    [searchParams]
  )

  const updateQueryParams = (route: Route, param: Record<string, string>) => {
    const current = new URLSearchParams(searchParams.toString())
    const [key, value] = Object.entries(param)[0]
    if (value) {
      current.set(key, value)
    } else {
      current.delete(key)
    }
    router.push(`${route}?${current.toString()}`)
  }

  return { getQueryParam, updateQueryParams }
}
