import { useContext, useEffect } from "react"
import { cartcontext } from "./CartProvider"

const update=(user,products)=>{
    fetch("http://localhost:3001/api/userinformation",{
     method:"POST",
     body:JSON.stringify({
        update:true,
       id:user._id,
       new:false,
       cartproducts:products
     })
    }).then(res=>{
     res.json().then(r=>{
     })
    })
    
   
}
export default update