import connectToDatabase from "@/connect/mongodb"
import { Schema, model } from "mongoose"
import order from "@/models/orders"
import user from "@/models/user"
const secret="HelloWorld!!"
const auth=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
export default async function handler(req, res) {
  const db=await connectToDatabase()
  const d=new Schema()
req.body =await JSON.parse(req.body)
  if(req.method=="POST"){
    if(req.body.create){
    
     const salt=await  bcrypt.genSaltSync(10)
     req.body.password=await bcrypt.hashSync(req.body.password,salt)
      const already=await user.findOne({email:req.body.email})
      if(already){
        return res.status(500).send("Accoutnalready created")
      }
      else{
        const pass=await  user.create({
             email:req.body.email,
              password:req.body.password}).then(async d=>{
                return res.status(200).send("USER CREATED SUCCESSFULLY")})}
      }else{
    const already=await user.findOne({email:req.body.email})
    const correct=await bcrypt.compareSync(req.body.password,already.password)
if(correct){
    return res.status(200).send(already)
}
else{
  return res.status(200).send("PLEASE ENTER CORRECT PASSWORD")
}
  }
  }
}
