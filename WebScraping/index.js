const fs =require("fs");
const https = require("https");
const cheerio =require("cheerio");
const axios=require("axios");

// URL of the image
const url = "https://www.instagram.com/reel/CoPMQ25gkg8/?utm_source=ig_web_copy_link";

// https.get(url, (res) => {
//    const path = "download.jpg";
//    const writeStream = fs.createWriteStream(path);

//    res.pipe(writeStream);

//    writeStream.on("finish", () => {
//       writeStream.close();
//       console.log("Download Completed!");
//    })
// })



async function getGenre(){
    try{
        const response= await axios.get(url);

        const $=cheerio.load(response.data);

        // fs.writeFileSync("./index.html",$.html())
        const videoString = $("meta[property='og:video']")._root.children();
        // const video=$("video");
        console.log("vediostring",videoString)
    }catch(er){
        console.log(er,"from catch getGenre");
    }
}
getGenre();

