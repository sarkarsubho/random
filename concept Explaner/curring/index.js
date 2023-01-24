
function sum(a,b){

    return a+b;
}



function curry(f){

    return function(a){

        return function(b){
          
            return f(a,b)
        }
    }
}

let currysum=curry(sum)
console.log(sum(1,2));

console.log(currysum(1)(2))