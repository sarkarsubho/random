const mongoose=require("mongoose");

const AutoHydroponicModel=new mongoose.Schema({
    
    title:{type:String,required:true},
    img:{type:String,required:true},
    des:{type:String,required:true},
    t1:{type:String,required:false},
    t2:{type:String,required:false},
    t3:{type:String,required:false},
},{
    timestamps:true,
    versionKey:false
});

module.exports=mongoose.model("automatingHydroponic",AutoHydroponicModel)