const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/ayush11');

const schema=new mongoose.Schema({
    name:String
});
const fruit=mongoose.model('ayush',schema)

b=async (e)=>{
    var a=await fruit.find({name:"AYUSH"})
    
}
b();