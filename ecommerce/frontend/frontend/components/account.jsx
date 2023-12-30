import React, { useContext, useRef, useState } from 'react'
import { cartcontext } from './CartProvider'
import updatecart from './updatecart'

export default function Account() {
  const [isMobile,setIsMobile]=useState(false)
  const [showoption,setshowoptions]=useState(false)
  const [isclick,setisclick]=useState(false)
  const [show,setshow]=useState(false)
  const {setuser,setisuser,setisclicked,user,isuser,setcartproducts}=useContext(cartcontext)
  const email=useRef()
  const password=useRef()
  const email1=useRef()
  const password1=useRef()
  setTimeout(()=>{
    if(window.innerWidth<767){
  setIsMobile(true)  }
    window.addEventListener('resize',()=>{
      if(window.innerWidth<767){
  setIsMobile(true) 
    }else{
        setIsMobile(false)
      }
    })
  })
  const handleclick=()=>{
    isclick?setisclick(false):setisclick(true)

  }
  const delay= (n)=>{
    return new Promise(setTimeout(()=>{
        return "Delay"
    },n))
  }
  const handleshow=async()=>{
show?setshow(false):setshow(true)
  }
  async function handlelogin(e){
    e.preventDefault()
    const data=await fetch("http://localhost:3001/api/user",{
            method:"POST",
            body:JSON.stringify({
              create:false,
              new:false,
              email:email.current.value,
              password:password.current.value
            })
          })
          const final=await data.json()
          setuser([final])
          setisclicked(false)
          setisuser(true)
         const d= await fetch("http://localhost:3001/api/userinformation",{
            method:"POST",
            body:JSON.stringify({
              update:false,
              new:true,
              id:final._id,
              cartproducts:[],
              orders:"asas"
            })
          })
          const final1=await d.json()
          setcartproducts(final1.cartproducts)
          
          
  }
  async function handlesignin(e){
    e.preventDefault()
const data=await fetch("http://localhost:3001/api/user",{
        method:"POST",
        body:JSON.stringify({
          create:true,
          email:email1.current.value,
          password:password1.current.value
        })
      })
      
      
  }
  return (
    <>
 
    <div className={`h-[26rem] grid   mt-auto ml-auto  ov z-[100]   border  fixed bg-gray-800 text-white  ${isMobile?"flex justify-center w-[250px]":"ml-[34%] mt-[10%] w-[400px]"}`}>
       
        <div className={ `${show?"login":"signin"} h-[100%] flex flex-col gap-6  w-[50%]    justify-self-center  z-[100] mt-4  absolute `}>
            <h1 className='ml-auto mr-auto text-3xl  z-[-1]'>Log In</h1>

            <form className='flex flex-col  gap-6 first-letter h-[100%] pt-4'>
              <label htmlFor='email' className='text-xl'>Email</label>
              <input type='email'ref={email} id="email"  className={`inputfield ${isclick?"inputfield-click":""}`}></input>
              <label htmlFor='password' className='text-xl'>Password</label>

              <input type='password' ref={password} id="password"  className={`inputfield ${isclick?"inputfield-click":""}`}></input>
              <button type='submit' onClick={handlelogin} className='submitbutton ml-auto mr-auto'>Submit</button>
            </form>
            <div className='flex flex-row gap-2 ml-auto mr-auto h-40'><p>New User: </p><p onClick={handleshow}>Sign in</p></div>
       
      
        </div>
        <div className={ `${show?"signin":"login"} h-[100%] flex flex-col gap-6  w-[50%]    justify-self-center  z-[100] mt-4  absolute `}>
            <h1 className='ml-auto mr-auto text-3xl  z-[-1]'>Sign In</h1>

            <form className='flex flex-col  gap-6 first-letter h-[100%] pt-4'>
              <label htmlFor='email' className='text-xl'>Email</label>
              <input type='email' ref={email1} id="email"  className={`inputfield ${isclick?"inputfield-click":""}`}></input>
              <label htmlFor='password' className='text-xl'>Password</label>

              <input type='password' ref={password1} id="password"  className={`inputfield ${isclick?"inputfield-click":""}`}></input>
              <button type='submit' onClick={handlesignin} className='submitbutton ml-auto mr-auto'>Submit</button>
            </form>
            <div className='flex flex-row gap-2 ml-auto mr-auto h-40'><p>New User: </p><p onClick={handleshow}>Sign in</p></div>
       
      
        </div>
    </div></>
  )
}
