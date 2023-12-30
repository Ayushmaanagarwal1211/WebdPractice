import connectToDatabase from "@/connect/mongodb"
import { Schema, model } from "mongoose"
import info from "@/models/userinfo"
export default async function handler(req, res) {
  const db=await connectToDatabase()
  req.body=await JSON.parse(req.body)
  const d=new Schema()
  if(req.method=="POST"){
    if(req.body.update){
    const final=await info.findOne({userid:req.body.id})


    await info.findByIdAndUpdate({_id:final._id},{cartproducts:req.body.cartproducts})

    return res.status(200).send("UPDATED")
}
    if(req.body.new){
        const final=await info.findOne({userid:req.body.id})
        if(final){
            return res.status(200).send(final)
        }else{
          
        
     const a=await  info.create({
        userid:req.body.id,
    cartproducts:req.body.cartproducts,
    orders:req.body.orders
  })
  return res.status(200).send(a)
  
        }}
  
else{
    const final=await info.findOne({userid:req.body.id})
    return res.status(200).send(final)
}
  
  }
 
}
