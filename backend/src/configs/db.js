const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

const connect=()=>{
    mongoose.connect(`mongodb+srv://subhankar:${process.env.MONGOPASSWORD}@cluster0.zrx9z.mongodb.net/pagenation-Email?retryWrites=true&w=majority`)
};

module.exports=connect;