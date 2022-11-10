const express=require("express");
const productModel=require("../models/B2CProduct.Mode");

const route=express.Router();

// CRUD
route.get("",async(req,res)=>{
    try{

        const products=await productModel.find().lean().exec();
        return res.status(200).send(products)
    }catch(er){
        console.log(er.message)
        return res.status(500).send({message:er.message})
        
    }
})


module.exports=route;