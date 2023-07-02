'use client'
import { useSession, signOut } from 'next-auth/react'

const StorePage = () => {
  const { data: session } = useSession()
  console.log(session)

  const handleLogout = async () => {
    const response = await signOut()
    console.log(response)
  }

  return (
    <div>
      StorePage<button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default StorePage
