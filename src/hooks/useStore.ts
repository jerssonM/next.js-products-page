import { useState, useEffect } from 'react'

export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F,
  initialState?: Partial<F>
) => {
  const result = store(callback) as F
  const [data, setData] = useState<F>(initialState as F)

  useEffect(() => {
    setData(result)
  }, [result])

  return data
}
