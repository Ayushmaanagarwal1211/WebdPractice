import React from 'react'

export default function Cartshowerpr(props) {
    const {productname,size,cost,url}=props.data
  return (
<div className='pl-5 pr-5'>
    <div className=' h-32  m-3   grid grid-cols-3 grid-rows-1'>
            <div className='object-contain justify-center grid  h-[100%] w-[100%]'><img src={url} className='h-[15vh] self-center'  alt='np'></img></div>
            <div className='flex flex-col gap-4 justify-center'> 
            <span>Product Name :{productname}</span>
            <span>Size:{size}</span>
            <span>Cost :{cost}</span>
            </div>
            <div className='h-[100%] w-auto grid  '>
                <button className='bg-blue-500 button h-10 text-white w-24 self-center '>Checkout</button>
            </div>
    </div>
    </div>
  )
}
