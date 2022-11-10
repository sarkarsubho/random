const express=require("express");
const automatingHydroponicsModel=require("../models/AutoHydrophonic.model");

const route=express.Router();

route.get("",async(req,res)=>{
    try{
        const automatingHydroponics=await automatingHydroponicsModel.find().lean().exec();

        return res.status(200).send(automatingHydroponics)

    }catch(er){
        return res.status(500).send({message:er.message})
    }
});

module.exports=route;