


import React, { useContext, useEffect, useReducer, useRef, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaShoppingCart,FaSearch,FaCross } from "react-icons/fa";
import { useRouter } from 'next/router';
import { cartcontext } from './CartProvider';
export default function Header() {
  const [hidden,sethidden]=useState(false)
  const [isMobile,setIsMobile]=useState(false)
  const search=useRef()
  const [showoption,setshowoptions]=useState(false)
  const {user,setuser,isuser,setisuser,setisclicked,isclicked}=useContext(cartcontext)
  function delay(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
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
  const scrollhandle=async ()=>{
    await delay(100)
    document.querySelector(".products").scrollIntoView({
      behavior: 'smooth', // Use smooth scrolling behavior
      block: 'start',     // Scroll to the start of the element
   
    });
  }    
  const router=useRouter()

  const handle=(e)=>{
    if(e.keyCode==13){
    router.push(`/search/?search=${search.current.value}`) 

  }}
  const handleSearch=()=>{
hidden==false?sethidden(true):""

  }
  const handleLeave=()=>{
    hidden && sethidden(false)

  }
  const handlemobile=()=>{
showoption?setshowoptions(false):setshowoptions(true)
  }
  const handleaccount=async (e)=>{
    if(user.length!=0){
        
    }
    else{
      e.preventDefault()
     isclicked?setisclicked(false):setisclicked(true)
    }
  }
  return (
    <>    <nav className={`${showoption?"showanimation":"h-14 "}  bg-gray-800 flex text-white`}> 
    <div className={`w-[20vw] h-full flex pl-7  text-3xl ${showoption?"pt-3":"items-center"}`} ><Link   href={'/website'}>Website</Link></div>
        {isMobile? <div className='cursor-pointer w-[80vw]   pr-5 h-[100%] grid  ' onClick={handlemobile}>
         
         <div className='justify-self-end mt-6 flex-col flex gap-[2px]' onClick={handlemobile}> <hr className='h-[2px] w-[24px] bg-white text-white'/>
          <hr className='h-[2px] w-[24px] bg-white text-white'/>
          <hr className='h-[2px] w-[24px] bg-white text-white'/>
</div>
{showoption &&<div className='flex flex-col items-center relative right-[3vh] gap-3 w-[100%]'>
<Link style={{'width':"50px"}}  href={'/'}>Home</Link>
      <button  onClick={scrollhandle}>Products</button>
      <Link href={'/category'}>Categories</Link>
      <button onClick={handleaccount}>Account</button>
      <Link className='flex gap-3' href={'/cart'}>Cart <FaShoppingCart className='mt-auto mb-auto' />
</Link>
</div>}
        </div>:<div className='flex gap-10 w-[80vw] pr-7 justify-end' style={{'alignItems':'center'}}>


         <div className='w-[44vw] flex justify-end items-center'><input id="input" ref={search}  onKeyDown={handle} type='search' placeholder='Search...' className={`text-black pl-2 pr-6 h-8 searchborder outline-none  relative left-4 ${hidden?"show animatesearch":"hidden leavesearch"}`}></input>        <FaSearch className={` ${hidden?"text-black ":""}`} onClick={handleSearch} />
         <button className={`absolute ${hidden?"text-black":"hidden"}`} onClick={handleLeave}><FaCross/></button>
</div>
<Link style={{'width':"50px"}}  href={'/'}>Home</Link>
      <button  onClick={scrollhandle}>Products</button>
      <Link href={'/category'}>Categories</Link>
      <button onClick={handleaccount}>Account</button>
      <Link className='flex gap-3' href={'/cart'}>Cart <FaShoppingCart className='mt-auto mb-auto' />
</Link></div>}</nav></>

  )
}



