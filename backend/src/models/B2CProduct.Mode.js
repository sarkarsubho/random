const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    category:{type:String,required:true},
    title:{type:String,required:true},
    img:{type:String,required:true},
    bestprice:{type:Number,required:true},
    actualprice:{type:Number,required:true}

},{
    timestamps:true,
    versionKey:false
})

module.exports=mongoose.model("B2CProduct",productSchema)