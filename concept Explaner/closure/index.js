function a() {
  let val = 1;

  return (age) => {
    
    val += age;
    return val;
  };
}



let value=a();

console.log(value(5));
console.log(value(2));

