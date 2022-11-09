const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    

},{
    timestamps:true,
    versionKey:false
})