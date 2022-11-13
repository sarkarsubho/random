function fruit(){
    console.log("ok babu");

}
fruit.name="sona";
console.log(fruit.name)

let rd =document.getElementById("main");
function handleclick (event){
    console.log(event.target.className)

}
rd.addEventListener("click",handleclick)
// nothing will happened but also not giv a error

let obj=Object.freeze({
    name:{ dp:"subhankar"},
    age:20
})
obj.name.dp="piku"

console.log(obj)

function fib (n){
    if(n===0 || n===1){
        return n
    }
    if(n<0){
        return 0
    }
    return fib(n-1)+fib(n-2)
}
console.log(fib(6),"7th fibonachi number")