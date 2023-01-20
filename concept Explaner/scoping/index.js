// Block scope
// {

//   let a=10;
//   const b=5;
//   var c=2

// }

// console.log(c)

// Function scope
var c=10
function fn() {
  // functional scope

  let a = c = 10;
}

fn();
console.log(c);
// Global scope

// let name="subhankar";

// function a(){
//     console.log(name)
// }

// a()
