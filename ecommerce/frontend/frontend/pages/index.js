import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Function from '@/components/Function'
import Products from '@/components/products'
import { useContext,useEffect  } from 'react'
import Account from '@/components/account'
import { cartcontext } from '@/components/CartProvider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {isuser,setisuser,isclicked,user}=useContext(cartcontext)
 
  return (
    <>   
    {isclicked && <Account/>}
    <Header />
   <Function />
   <Products />
   </>

  )
}
