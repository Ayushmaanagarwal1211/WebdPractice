import mongoose, { Model,Schema, models } from "mongoose";
const schema=new Schema({
  
    email:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    }

})
const user=models?.ayush ||  mongoose.model("ayush",schema)
export default user;