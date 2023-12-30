import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { cartcontext } from './CartProvider'

export default function Products() {
    const [products,useproducts]=useState([])
    let a=0   
    const {isuser,isclicked}=useContext(cartcontext)
    const [isdate,setdate]=useState(false)
    const [isMobile,setIsMobile]=useState(false)
    const [showoption,setshowoptions]=useState(false)
    
    useEffect(() => {
   fetcha()
     
    },[])
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
    const fetcha=async ()=>{
        const data=await fetch('http://localhost:3000/api/hello')
const object=await data.json()  
useproducts(object)


    }
function datecheck(props){
  const data=new Date(props.createdAt)
     const presentdate=new Date()
      data.setDate(data.getDate()+3)
      if(data>=presentdate){
return true  
    }
    else{
      return false
    }
}   
  return (
    <div className= {` pl-14 pr-14 z-30 h-max pt-4 pb-4 ${isclicked?"bg-slate-200 pointer-events-none ":"bg-slate-200"}`}>
      <h1 className='text-[3em] font-bold'>New Arrivals</h1>
      <ul className=' mt-[3vh] grid grid-cols grids '>
        {
          products.map((data)=>{
            
           return datecheck(data) && <li key={data._id} className='justify-self-center w-40'><Card datas={data} /></li>
          })
        }
      </ul>
      <h1 className={`${isMobile?"text-center":""} text-[3em] font-bold products relative left-[2vw]`}>Products</h1>
      <ul className={`${isMobile?"relative right-3":""} mt-[3vh] grid grid-cols grids  w-[100%]  `}>
        {
          products.map((data)=>{
            
           return <li key={data._id} className='w-40 justify-self-center'><Card datas={data} /></li>
          })
        }
      </ul>
    </div>
  )
}
