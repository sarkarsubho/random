const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    
    let list = fs.readdirSync(".");

    // res.write(list);
    res.end(JSON.stringify(list));
  } else if (req.url === "/public") {
    // let public=fs.readFile("public.txt",(err,data)=>{

    //     if(err){
    //         res.write(err);
    //         res.end();
    //     }else{
    //         res.write(data);
    //         res.end();
    //     }
    // });
    // let public = fs.readFileSync("public").toString();
    let list = fs.readdirSync(`./${req.url}`);

    res.end(JSON.stringify(list));
  } else if (req.url === "/index.html") {
    // let list = fs.readFileSync(`.${req.url}`,(err,data)=>{
    //     if(err){
    //         return err
    //     }
    //     return data.toString()
    // });
    let list = fs.readFileSync(`index.html`).toString();
    res.end(JSON.stringify(list));
  }else{
    res.end(JSON.stringify("invalid Path"));
  }
});

server.listen(8080, () => {
  console.log("server is running");
});


module.exports=server;