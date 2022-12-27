const http=require("http");
const fs=require("fs");

const server =http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end( "this is Home")
    }
    else if(req.url==="/stream"){
       
        let data=fs.readFileSync("./db.json","utf-8");

        let passed_data= JSON.parse(data);

        passed_data.teacher.push({
            
        })
        // let stream=fs.createReadStream("./index.txt","utf-8");

        // stream.pipe()
    }
});
server.listen(4500,()=>{
    console.log("port is listing on 4500")
})