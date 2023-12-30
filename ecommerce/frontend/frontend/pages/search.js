import Card from '@/components/Card'
import Header from '@/components/header'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function Search() {
  const router=useRouter()
  const [products,setproducts]=useState([])
const [se,setse]=useState([])
  useEffect(()=>{
    const search=router.query.search;
    fetchs(search)
  },[router.query])
  const fetchs=async (search)=>{
    const data=await fetch('http://localhost:3000/api/search',{
      method:"POST",
      body:JSON.stringify({
        search:search
      })
    }).then((r)=>{
      r.json().then(final=>{
        setproducts(final)
      })
    })
  }
  return (
    <><Header/>    
    <div className='bg-slate-200 pl-14 pr-14 h-max pt-4 pb-4'>
          <h1 className='text-[2em] font-normal'>Your Search : </h1>
          <ul className=' mt-[3vh] grid grid-cols-6 grids  '>
        {
          products.map((data)=>{
            
           return <li className='w-40'><Card datas={data} /></li>
          })
        }
      </ul>
    </div></>

  )
}
