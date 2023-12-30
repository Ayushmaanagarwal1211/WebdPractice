import React, { useContext, useEffect, useState } from 'react'

import Button from './Button'
import { images } from '@/next.config'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useRouter } from 'next/router';
import { cartcontext } from './CartProvider';
export default function Function() {
  const {isuser,setisuser,isclicked}=useContext(cartcontext)
  const [product,setproduct]=useState([])
const [checkproduct,setcheckproduct]=useState([])
const [img,changeurl]=useState([])
const router=useRouter()
const handleclick=(e)=>{
  router.push(`/singleproducts/?id=${e.target.title}`)
}
  useEffect(()=>{
    fetchdata()
  },[])
  const fetchdata=async ()=>{
    const data= await fetch("http://localhost:3000/api/hello")
  let array=[]
  let array1=[]
  const finaldata=await data.json()
  finaldata.map((d)=>{
    if(d.featured=="true"){
      array.push(d)
      array1.push(d.url[0])

    }
    return "a"
  })

  setproduct(array)
  setcheckproduct(array1)
  }
  
 

  return (
    <Carousel showThumbs={false} dynamicHeight={false} autoPlay={true} infiniteLoop={true} >
{product.length!=0 &&
product.map((data)=>{
  return (
  <div title={data._id} key={data._id}  className={`h-[100%] relative z-[99] ${isclicked?"bg-gray-800 pointer-events-none ":"o bg-gray-800"} w-screen wi text-white flex  p-14 whenhover`} onClick={handleclick} >
    <div className='topmac text-lg linegap ' title={data._id}  onClick={handleclick}>
        <h1 className='text-4xl mb-4'  onClick={handleclick} title={data._id}>{data.productname}</h1>
        <p  onClick={handleclick} title={data._id}>{data.description}</p>
        <div className='flex justify-center gap-6 mt-6' title={data._id}  onClick={handleclick}>
        <button className='bg-black border w-32' title={data._id}>Read more</button>
    <button className='bg-blue-600 h-11 w-32 border ' title={data._id}>Add to cart</button></div>
    </div>
    <div className='flex topmac justify-center ' title={data._id}   onClick={handleclick}>
      <img src={data.url[0]}></img>
    </div>
  </div>)
})

}
</Carousel>
  )
}
