import connectToDatabase from "@/connect/mongodb"
import { Schema, model } from "mongoose"
import order from "@/models/orders"
export default async function handler(req, res) {
  const db=await connectToDatabase()
  const d=new Schema()
  await order.create({
    productid:1,
    quantity:1,
    email:"asas",
    address:"asass"
  })
  res.status(200).json({ name: 'John Doe' })
}
