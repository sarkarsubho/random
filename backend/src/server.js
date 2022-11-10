const app=require("./index");
const connect=require("./configs/db");
const dotenv= require("dotenv")
dotenv.config();
const port =process.env.PORT


app.listen(port,async()=>{
    try{
      await  connect();
     return console.log(`it is connect on ${port} `)
    }catch(er){
    return console.log(er)
    }
})