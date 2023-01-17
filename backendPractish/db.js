const mongoose=require("mongoose");
const connect=mongoose.connect("mongodb://127.0.0.1:27017/superheroDB");

let schema=mongoose.Schema({
    name:String,
    city:String,
    power:Number,
    villen:String,
    language:String,
    is_active:Boolean
})
const model=mongoose.model("heros",schema);
module.exports={model,connect};