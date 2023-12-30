import React, { useContext, useEffect, useState } from 'react'
import { cartcontext } from './CartProvider'
import { useRouter } from 'next/router'
import { FaShoppingBag,FaStar,FaStarHalf ,FaStarHalfAlt} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai'

export default function Card(props) {
    const {url,productname,size,cost,_id}=props.datas
    const [color,setcolor]=useState(false)
      
    const rating=2;
  const {cartproducts,setcartproducts,user,isuser}=useContext(cartcontext)

    const handleclick=async (e)=>{
      const array=[]
      let flag=0
      if(cartproducts.length!==0){
      cartproducts.map((data)=>{

          if(data.id==e.currentTarget.id){
            array.push({id:data.id,count:data.count+1})
            flag=1;
 }
          else{
            array.push(data)
          }
      })
    
    } if(flag==0 && cartproducts.length!==0){
          array.push({id:e.currentTarget.id,count:1})
      }
      if(cartproducts.length==0){
        array.push({id:e.currentTarget.id,count:1})
      }

      
      setcartproducts(array)
      if(isuser){
      await fetch("http://localhost:3001/api/userinformation",{
              method:"POST",
              body:JSON.stringify({
                new:false,
                update:true,
                cartproducts:array,
                id:user[0]._id
              })
            })}
    }

    const router=useRouter();
    const handleclick1=()=>{
          router.push(    `/singleproducts/?id=${_id}`, )

    }
    const handleenter=()=>{
        setcolor(true)
    }
    function handleleave(){
      setcolor(false)
    }
  return (
<div className='h-[340px]  w-48 cardhover cardborder  fontfamily' >
        <div className='w-auto h-32  flex justify-center  bg-white ' onClick={handleclick1}>
        <img className='h-24 w-28 mb-auto border mt-auto  ' src={url[0]}></img></div>
        <h2 className='mt-5 ml-3'>{productname}</h2>
        <div className='flex gap-5 mt-3 pl-3  flex-col'>
            
            <span className='font-extrabold text-xl '>{cost}</span>
            <ul className='flex gap-[0.5] flex-row'>
              <li>{rating>=1?<FaStar className='text-yellow-500 border-li' />:rating>=0.5 && rating<1?<FaStarHalfAlt  className='text-yellow-500 border-li icon'/>:<AiOutlineStar className='text-yellow-500 border-li icon' />}</li>
              <li>{rating>=2?<FaStar className='text-yellow-500 border-li' />:rating>=1.5 && rating<2?<FaStarHalfAlt  className='text-yellow-500 border-li icon'/>:<AiOutlineStar className='text-yellow-500 border-li icon' />}</li>
              <li>{rating>=3?<FaStar className='text-yellow-500 border-li' />:rating>=2.5 && rating<3?<FaStarHalfAlt  className='text-yellow-500 border-li icon'/>:<AiOutlineStar className='text-yellow-500 border-li icon' />}</li>
              <li>{rating>=4?<FaStar className='text-yellow-500 border-li' />:rating>=3.5 && rating<4?<FaStarHalfAlt  className='text-yellow-500 border-li icon'/>:<AiOutlineStar className='text-yellow-500 border-li icon' />}</li>
              <li>{rating>=5?<FaStar className='text-yellow-500 border-li' />:rating>=4.5 && rating<5?<FaStarHalfAlt  className='text-yellow-500 border-li icon'/>:<AiOutlineStar className='text-yellow-500 border-li icon' />}</li>

            </ul>

            <div className='flex flex-row items-center'>
            <span className='font-extrabold w-[65%] text-xl '>{cost}</span>
<label htmlFor={_id} className={` ${color?'bg-gray-700':'bg-gray-100'}   cartborder p-2  `}  onMouseEnter={handleenter} onMouseLeave={handleleave} id={_id} onClick={handleclick} > <FaShoppingBag    className={`text-xl`}  color={`${color?"white":"gray"}`}/></label>
            <button className={` ${color?'bg-gray-700':'bg-gray-100'} hidden  cartborder p-2  `}  onMouseEnter={handleenter} onMouseLeave={handleleave}onClick={handleclick} ></button>
        </div>
        </div>
    </div>
  
  )
}
