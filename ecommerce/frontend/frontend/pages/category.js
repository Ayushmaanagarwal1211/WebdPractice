import Card from '@/components/Card'
import { cartcontext } from '@/components/CartProvider'
import Header from '@/components/header'
import React, { useContext, useEffect, useRef, useState } from 'react'
import InputRange from 'react-input-range'

export default function category() {
    const [products,useproducts]=useState([])
    const {isuser,isclicked}=useContext(cartcontext)
    const [isdate,setdate]=useState(false)
    const [isMobile,setIsMobile]=useState(false)
    const [showoption,setshowoptions]=useState(false)
    const [category,setcategory]=useState([])
    const [fixed,setfixed]=useState([])
    const [selectedCategory,setSelectedcategory]=useState("All")
const state=useRef()    
    const [value,setvalue]=useState('0')
    
    setTimeout(()=>{
        if(window.innerWidth<767){
      setIsMobile(true)  }
        window.addEventListener('resize',()=>{
          if(window.innerWidth<767){
      setIsMobile(true) 
        }else{
            setIsMobile(false)
          }
        })})
    useEffect(() => {
        fetcha()
          
         },[])
         const fetcha=async ()=>{
            const array=[]
            const data=await fetch('http://localhost:3000/api/hello')
    const object=await data.json()  
    useproducts(object)
    setfixed(object)
    array.push("All")
    object.map((data)=>{
        if(data.category==null){

        }else{
        array.push(data.category)
        }
    })
    setcategory(array)
    console.log(array)

        }
    
        async function handlechange(){
            setvalue(state.current.value)
            let array=[]
           array= fixed.filter(data=>{
                if(data.cost<state.current.value){
                    return data
                }
                
            })
            useproducts(array)

console.log(array)        }
        const handlecategorychange=async(e)=>{
            console.log(e.target.id)
            const data=await fetch('http://localhost:3000/api/search',{
                method:"POST",
                body:JSON.stringify({
                    find:true,
                    category:e.target.id
                })
            })
            data.json().then(d=>{
                useproducts(d)
            })

        }
         return (
    <>
    <Header />
<div className='flex flex-row bg-slate-200'>

    <div className={` ${isMobile?"w-[40%]":"w-[15%]"} categoryborder`}>
        <div className='w-[100%] text-center'>
            <h1 className='text-xl font-bold mt-3 mb-3'>Categories</h1>
            <ul className='flex  flex-col items-center'>
                {
                    category.map((data)=>{
                        return <li id={data} className={`text-lg ${selectedCategory==data?"bo":""} font-semibold text-gray-500 pb-1 w-[20%]`} onClick={handlecategorychange}>{data}</li>
                    })
                }
            </ul>

        </div>
        <div className='w-[100%] bg-slate-200 flex items-center flex-col mt-5 gap-2'>
            <span>price : 0 -{value}</span>
            <input ref={state} defaultValue={1000} onChange={handlechange} type="range" id="price" name="pricerange" min="0" max="1000" />
        </div>    
    </div>
   
   
    <div className='w-[85%]'>

            <h1 className={`${isMobile?"text-center":""} text-[3em] font-bold products relative left-[2vw]`}>Products</h1>
            <ul className={`${isMobile?"relative right-3":""} mt-[3vh] grid grid-cols grids  w-[100%]  `}>
            {
                products.map((data)=>{
          
                return <li key={data._id} className='w-40 justify-self-center'><Card datas={data} /></li>
                })
            }
            </ul>

    </div>
</div>
    </>
  )
}
