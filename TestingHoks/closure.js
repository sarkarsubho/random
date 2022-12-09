
function a(){
    let b=10;
    return function t(tmp){
        b=b+tmp
       return b
    }
}

let f1=a();
console.log(f1(2))
console.log(f1(2))