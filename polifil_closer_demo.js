
const str= "aabdcddedde";
let obj = {};
for(let i=0; i<str.length;i++){
    
    let key = str[i];
    
    obj[key] = obj[key] || 0;
    obj[key]++;
    
}
console.log(obj);

// log details scope test
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); 
  }
  
  console.log(count); 
})();

// closer test scope
// without the function scope the it will be priented 3 times
// but as it is call in the iife imidiate invocation function it will create a different scope for the timeout function closer. 

for (var i = 0; i < 3; i++) {
    (function (i){
        setTimeout(function log() {
            
      console.log(i); 
        
    }, 1000);
    })(i);
  }
  
  let arr = [ [1,2,3], [3,[0,9,[9,7,5]]]]

function polifillFlat(depth =1){
    
    const flatten = (arr,depth)=>{
        
        if(depth ===0){
            return arr
        }
        
        arr = arr.reduce((a,c)=>{
            return a.concat(Array.isArray(c) ? flatten(c,depth-1) :c )
        },[]);
        return arr
    }
    return flatten(this,depth);
   } 
   Array.prototype.flat =polifillFlat;
    // console.log(flatten(arr,2))
        console.log("all log", arr.flat());

// }








