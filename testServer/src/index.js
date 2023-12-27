const express = require("express");

const app = express();

app.use(express.json());

app.get("/exp", async(req,res)=>{
    try {

        return res.status(200).send({response:""})
        
    } catch (error) {
        return res.status(500).send({message:error})
    }
})

app.listen(8080,async()=>{
    
    try {
        console.log("server is up and running");
    } catch (error) {
       console.log("error occurred during starting the server"); 
    }
})