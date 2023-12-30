import CartProvider, { cartcontext } from '@/components/CartProvider'
import Cartshowerpr from '@/components/Cartshowerpr'
import Header from '@/components/header'
import React, { useContext, useEffect, useState } from 'react'

export default  function cart() {   
    const [isVisible, setIsVisible] = useState(false);
    const {cartproducts,setcartproducts}=useContext(cartcontext)
    const [products,availableproducts]=useState([])
    const [p,ps]=useState([])
    const [dataproducts,setdataproducts]=useState([])
    const [sortedArray,setsortedArray]=useState([])
    const [counts,setcount]=useState([])
    const {user}=useContext(cartcontext)
    const [isMobile,setIsMobile]=useState(false)
    const [showoption,setshowoptions]=useState(false)
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
    const fetchs=async (count)=>{
      if(count==0){

      
       let array1=[]
       let array=[]
      const promises= await  cartproducts.map(async (item,index)=>{

             const data=await fetch('http://localhost:3000/api/cart',{
method:'POST',
            body:JSON.stringify({
                "id":cartproducts[index].id
            })
        })
        await Promise.all(Array(data))       

        const da=await data.json()
        await Promise.all(Array(da))       

        array1.push(da)   

})
await Promise.all(promises)       
cartproducts.map((data,index)=>{
  array1.map(d=>{
    if(d._id==data.id){
      array.push(d)
    }
  })
})
if(cartproducts.length==0){
    setdataproducts([])
}

  setdataproducts(array)
}
    }  
    let count=0 

  useEffect(()=>{  
  fetchs(count)
  count+=1
},cartproducts)  
    const handledecrease=async (e)=>{
      let arr=[]
    cartproducts.map((data,index)=>{
      if(data.id==e.target.id){
        if(data.count-1!==-1){
          arr.push({id:data.id,count:data.count-1})
        }else{
          arr.push(data)
        }
      }else{
        arr.push(data)
      }
    })
    setcartproducts(arr)
    if(!user){
    await fetch("http://localhost:3001/api/userinformation",{
      method:"POST",
      body:JSON.stringify({
        new:false,
        update:true,
        cartproducts:arr,
        id:user[0]._id
      })
    })    
    }}
    
    const handleincrease=async (e)=>{
      let arr=[]
      cartproducts.map((data,index)=>{
        if(data.id==e.target.id){
   
            arr.push({id:data.id,count:data.count+1})
       
        }else{
          arr.push(data)
        }
      })
      setcartproducts(arr)
      if(!user){
      await fetch("http://localhost:3001/api/userinformation",{
        method:"POST",
        body:JSON.stringify({
          new:false,
          update:true,
          cartproducts:arr,
          id:user[0]._id
        })
      })
    }
    }
  const image=(index)=>{
   const findid=cartproducts[index]
   dataproducts.map((data)=>{
    if(data._id==findid.id){
      return data.url[0]
    }
   })

  }
  
  return (

        <><Header />    <div className={`${isMobile?"bg-slate-100 w-[100vw] ":"bg-slate-100    pt-10 pb-10   w-[100vw]"} `}>

    <h1 className={` mb-4 text-4xl ${isMobile?"w-[100%]  font-bold pb-[3vh] pt-[3vh]":"font-extrabold pb-[3vh]"} text-center`}>Cart</h1>
    {dataproducts.length!==0  && 
        <table className={`w-[100vw] ${isMobile?"pt-[3vh] pb-[3vh]":""} `} >
            
                <tr className={`${isMobile?"ml-2 grid-cols-3 text-lg":"grid-cols-4 text-xl"} grid   text-center `}>
                    <th className={`${isMobile?"w-[100%]":"justify-self-center w-[100%]"} grid `}><span>Products</span></th>
                    <th className={`${isMobile?"w-[100%]":"w-[25%] justify-self-center"} grid  `} >Quantity</th>
                    <th className={`${isMobile?"w-[100%] text-center justify-self-center":"w-[25%]  justify-self-center"} grid  `}>Price</th>
                    <th className={`${isMobile?"w-[18%]":"w-[25%] justify-self-center "} grid `}></th>
                    <th className={`${isMobile?"w-[18%]":"w-[25%]"} grid   `}></th>
                </tr>
                <tr>
{
            dataproducts.map((data,index)=>{
                return (<tr className={`${isMobile?"ml-2 grid-cols-3":"grid-cols-4"} grid  h-[20vh] items-center`}><td className={`${isMobile?" w-[100%]":" "} flex items-center justify-center  h-auto w-auto`} ><img className='h-20 w-20 ' src={data.url[0]}></img></td>
                <td className={` grid justify-center items-center `}><div className={`flex gap-2 ${isMobile?"flex-col text-center":""}`}><button className={`text-lg font-extrabold  ${isMobile?"w-[6vw] h-[6vw] flex items-center text-center justify-center":"w-[2vw]"} bg-white`} id={cartproducts[index].id}  onClick={handledecrease}>-</button><span>{cartproducts[index].count}</span><button id={cartproducts[index].id} onClick={handleincrease} className={`text-lg font-extrabold  ${isMobile?"flex items-center justify-center text-center w-[6vw] h-[6vw]":"w-[2vw]"} bg-white`}>+</button></div></td>
                <td className={`${isMobile?"":"justify-center  items-center"} grid  text-center `}> {cartproducts[index].count*data.cost}</td>
                <td className={`${isMobile?"":" "} grid  text-center items-center justify-center`}><button className={`bg-blue-500 button h-10 ${isMobile?"w-20": "w-28"} text-white`}>Checkout</button></td>
                </tr>
                )
            })}
            
            
            </tr>
            
        </table>
}
    </div>
    </>
  )
}
