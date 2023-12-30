import React, { useState } from 'react'

export default function Body(props) {
    const {options,name}=props
    const [clickedButton,setClickedButton]=useState(0)
    const [flag,setflag]=useState(0)
    async function handleColorChange(){
        if(clickedButton==0){
            setClickedButton(1)
            setflag(1)
        }else{
            setClickedButton(0)
            setflag(1)

        }
    }
  return (
    <>
    <section><div className={`h-20 w-screen text-white bg-black flex items-center pl-4 pr-4 `}>
       <div className=' w-[90%] h-auto flex justify-start'> <h1 className=' '>{name}</h1></div>
        <div className={`justify-self-end flex  h-7 bg-white roundborder roundborder1 text-black text-sm font-bold p-[0.8px] `}>
            <button className={` roundborder w-20 h-[100%] text-center p-[0.8px] bg-white `} onClick={handleColorChange}><p className={`w-[100%] changecolor relative ${clickedButton==0?`${flag==1?"remove1":""}`:'remove'} `}></p><p className='z-[99] relative bottom-[100%]'>{options[0]}</p></button>
            <button className={` roundborder1 h-[100%]  w-20 bg-white p-[0.8px] `} onClick={handleColorChange}><p className=' z-[99] '>{options[1]}</p></button>
        </div>

        </div></section>
    </>
  )
}
