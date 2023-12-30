import mongoose, { Mongoose, model, models } from "mongoose";
const schema=new mongoose.Schema({
    userid:{
type:mongoose.Schema.Types.ObjectId,
required:true  
  },
    cartproducts:{
        required:true,
        type:Array
    },
    orders:{
        required:true,
        type:String
    }
})
const info=models?.u ||  mongoose.model('u',schema)
export default info