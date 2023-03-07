
const validator = (req,res,next)=>{
   
    console.log("from validator",req.body);
    next();

}
module.exports=validator;
