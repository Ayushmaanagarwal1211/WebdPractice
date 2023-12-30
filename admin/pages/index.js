import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Contact from './contact'
import { useRouter } from 'next/router'
import Admin from '@/components/user'
import User from '@/components/user'

export default function Index() {
    const { data: session } = useSession()
    const router=useRouter()
    if (session) {
      return (
        <>
          <User />
        </>
      )
    }
  return (
    <div className='h-screen w-screen flex bg-white  align-middle  justify-center'>
        <div className='h-20 w-40 bg-gray-400 self-center '>
        <button onClick={() => signIn('google')}>Login with google</button>
    </div></div>
  )
}
