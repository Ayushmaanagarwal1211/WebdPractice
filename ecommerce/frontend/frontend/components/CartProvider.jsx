import React, { createContext, useEffect, useState } from 'react'
export const cartcontext=createContext()
export default function CartProvider({children}) {
const [cartproducts,setcartproducts]=useState([])
const [user,setuser]=useState([])
const [isuser,setisuser]=useState(false)
const [isclicked,setisclicked]=useState(false)
 

  return (

    <cartcontext.Provider value={{cartproducts,setcartproducts,isclicked,setisclicked,user,setuser,isuser,setisuser}}>{children}</cartcontext.Provider>
  )
}
