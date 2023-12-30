import Header from '@/components/header'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function sigleproducts() {
  const router=useRouter()
  const [product,setproduct]=useState([])  
const [url,seturl]=useState([])
const [opacity,setopacity]=useState(0)
const [image,setimage]=useState(0)
  if(product.length!==0){
  }

  useEffect(()=>{
    const id=router.query.id

    fetchdata(id)
  },[])
  const fetchdata=async (ids)=>{
    const fetchd =await fetch('http://localhost:3000/api/cart',{
      method:"POST",
      body:JSON.stringify({
        "id":ids
      })
    }).then(data=>{
      data.json().then(d=>{
        setproduct(Array(d))
        seturl(d.url)
      })
    })
  }
  const handleImageChange=async(e)=>{
    setimage(Number(e.target.id))
    setopacity(Number(e.target.id))
  }
  return (
    <>
    <Header />
    {product.length!==0 && 
  
    
      <div className='bg-slate-200 flex w-screen h-[100vh] '>
        <div className='w-[50%] flex justify-center flex-row '>      
          <div className='flex gap-1 h-[50%] w-[60%] pl-3 pr-3 mt-4 justify-center items-center bg-white flex-col '>
          
          <img className='h-[100%] mt-2 w-auto justify-self-center self-center borderimageradius '  src={url[image]}></img>
          
            <div className='flex flex-row w-[90%] h-[30%] bg-white gap-1    '>
            {
              url.map((data,index)=>{
               return  <img id={index} key={data}  className={`h-[50%] bg-white borderimageradius p-3 ${index==opacity?"":"opacity-[0.2]"}  imageborder w-auto    justify-self-center self-center`} onClick={handleImageChange} src={`${data}`}></img>
              })
            }
            </div>
            </div>
            </div>

          <div>
              <h1 className='font-bold text-5xl'>{product[0].productname}</h1>
              <p>{product[0].description}</p>
        </div>
      </div>

    }
    </>
  )
}
