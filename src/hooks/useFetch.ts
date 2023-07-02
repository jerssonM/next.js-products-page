import { useState } from 'react'

export const useFetch = () => {
  const [error, setError] = useState<unknown>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const execute = async <T = unknown>(
    request: Promise<T>
  ): Promise<T | null> => {
    try {
      setIsLoading(true)
      const response = await request
      return response
    } catch (e) {
      setError(e)
      return null
    } finally {
      setIsLoading(false)
    }
  }

  return { execute, error, isLoading }
}
