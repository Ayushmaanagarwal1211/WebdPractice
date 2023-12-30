import mongoose, { Model,Schema, models } from "mongoose";
const schema=new Schema({
    productid:{
    type:Number,
    required:true
    },
    quantity:{
        required:true,
        type:Number
    }
    ,email:{
        required:true,
        type:String
    },
    address:{
        required:true,type:String
    }

})
const order=models?.Order ||  mongoose.model("Order",schema)
export default order;