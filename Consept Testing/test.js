//inheritance, Encapsulation, Abstraction and Polymorphism

//inhartance prototype testing
// Prototypal inharitance

// let bike = {
//   color: "blue",
// };

// let venom = {
//   name: "Venom",
// };

// venom.__proto__ = bike;

// console.log("venom color",venom.color);


// Pseudoclassical Inheritance
// class Person {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   shoeDetail() {
//     console.log(`${this.name} has color ${this.color}`);
//   }
// }

// let p1 = new Person("tommy", "gray");

// p1.shoeDetail();

// class DetailedPerson extends Person {
//   constructor(name, color) {
//     super(name, color);
//     this.age = 20;
//   }

//   detailshowperson() {
//     console.log(
//       `${this.name} has color ${this.color} and has age of ${this.age}`
//     );
//   }
// }
// let dp2 = new DetailedPerson("tony", "red");
// dp2.detailshowperson();

//Functional Inharitance

// function Person(data) {
//   var that = {};
//   that.name = data.name;
//   return that;
// }

// // Create a child object, to inherit from the base Person
// function Employee(data) {
//   var that = Person(data);
//   that.sayHello = function () {
//     return "Hello, I'm " + that.name;
//   };
//   return that;
// }

// var myEmployee = Employee({ name: "Rufi" });
// console.log(myEmployee.sayHello());

// function a(p, c) {
//   this.name = p;
//   this.color = c;

//   this.detail=function(){
//     console.log(this.name,this.color)
//   }
// }

// let tmp=new a("subho","brown");
// tmp.__proto__.height="10cm"
// tmp.detail();
// let tmp2=new a("subho","brown");
// console.log(tmp2.height)
// Functional inharitance;
// let emp=new Employee();
// emp.__proto__.rebet=10;

// let emp2=new Employee();
// console.log(emp2.rebet)

//Encapsulation

// class Car{
//   constructor(){
//     let color;
//     let price;
//   }

//   setColor(color){
//     this.color=color;
//   }
//   setPrice(val){
//     this.price=val;
//   }

//   getColor(){
//     return this.color;
//   }

//   getPrice(){
//     return this.price;
//   }

// }
// let p=new Car();

// p.setColor("green");
// p.setPrice(500);

// console.log(p.getColor());
// console.log(p.getPrice())

// Abstruction

// function Employee(name,age,basicsel){

//   this.name = name;
//   this.age = age;
//   this.basicsel = basicsel;
//   let bonus = 1000;

//   let totalsalary = function () {

//       let total = bonus + basicsel
//       console.log(`Total salary  ${total}`);
//   }

//   this.details = function () {
//       console.log(name);
//       totalsalary()
//   }
//   }

// let emp = new Employee("Masai", 20, 10000)
// // console.log(emp);
// emp.bonus=50000;
// emp.details();

//Encapsulation
// class Animal{
//   constructor(name) {
//       this.name=name
//   }
//   eats() {
//       console.log(`${this.name} eats food`);
//   }
// }

// class Aligator extends Animal {
//   // constructor(name) {
//   //   super(name)
//   // }
// eats() {
//   console.log(`${this.name} eats fishes`);
// }
// }
// const a = new Aligator("abc")
// a.eats()

// class Laptop {
//   constructor(c){
//     let color=c;
//     let price;
//   }
//   setColor(color){
//     this.color=color;
//   }
//   getColor(){
//     return this.color
//   }
// }

// let product=new Laptop();
// product.setColor("red");
// console.log(product.color);

// polimorohsm
//useLink :- https://blog.sessionstack.com/how-javascript-works-3-types-of-polymorphism-f10ff4992be1
// poli means -->many;
// morohsm --.means form ;

// Subtype Polimorphasm

class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  speek() {
    console.log(`${this.name || "Animal"} has sound`);
  }
}
class Cat extends Animal {
  speek() {
    console.log(`${this.name} says mew mew`);
  }
}

class Dog extends Animal {
  speek() {
    console.log(`${this.name} says baw baw`);
  }
  saycolor() {
    console.log(`${this.color} is the color`);
  }
}

let main = new Animal();

let cat = new Cat("pussy");

let dog = new Dog("bob", "red");

main.speek();
dog.speek();
dog.saycolor();
cat.speek();

// Ad-hoc Polymorphism

// one same obj or class here the + opereter is acting different behaviour in different situation

// Ad-hoc polymorphism is a type of polymorphism that allows a value to exhibit different behaviors when “viewed” at different types. Ad-hoc polymorphism can involve a function taking on different forms but bearing the same name.

// This type of polymorphism is oftentimes called overloading. Let’s look at a type of ad-hoc polymorphism called operator overloading.

// Operator Overloading
// 5 + 5; // will print 10
// 'I am' + ' ' + '5 years old' // will print I am 5 years old

// From the example above, the operator + is taking up different forms of adding numbers and concatenating Strings.



// Parametric Polymorphism


// Parametric polymorphism is a type of polymorphism that deals with generic functions and generic data types while still maintaining static type safety. Generic functions and data types are functions or data types that can be written in a way so that they can handle values similarly without classifying them based on their type.
// For example, objects can store different data types. It doesn’t distinguish its values based on their types:


// From the code above, we have an object named after a person Ann. The object contains Ann’s first and last name which are Strings, Ann’s age which is a number, and a Boolean which states that Ann isn’t an adult. Although there are different data types in our object Ann, the object handles them similarly.

// Another quick example is an array. In JavaScript, an array can take up different data types as its element.

// const Ann = [‘Ann’, ‘Kim’, 4, false];
// Just as in our object example, our array example consists of various data types all treated similarly. If you run console.log(Ann) for our object or array, you should get a list of the elements.
// const id = (x) => x;
// id(1); // 1
// id("foo"); // "foo"
// In the example above, id doesn’t distinguish the values 1 and foo according to their types. So, id can be in different data types; strings or numbers etc.


//** generic functions */
// generic functions are the functions which paramiter are not decleared;

// in typeScript generic functions are;

// const getGenericarr = <T>(products:T[]):T=>{
//   {
//     return product[]
//   }



/* 
here <T>  in type Script is the generic type it Canb take generic any type of a arr element 
that means the arr elements can be anything(any data Type)

*/

// REF =https://www.youtube.com/watch?v=ojx-0zVeIr4 generic function
// https://www.youtube.com/watch?v=e9O_a2h-S_k THe Object Function Proto


// ** so Parametric Polymorphism means in the  Object function Arguments are thaken as it and store them as the explicet values of them





// let a=0;

// function c() {
//   let a = 0;
//   return function b(v) {
//     return a=a + v;
//   };
// }
// let d = c();
// console.log(d(2));
// console.log(d(3));

// call apply bind
// let obj={
//   a:10,
//   b:2,
//   add:function(a=2,b=2){return this.a+this.b+a+b}
// }
// let obj2={
//   a:1,
//   b:1
// }

// console.log(obj.add())
// console.log(obj.add.apply(obj2,[10])) // call instantly but take argument as a array
// console.log(obj.add.call(obj2,10,12)) // call instantly but take argument as a simple paramiter
// console.log(obj.add.bind(obj2,10)()) //same as cal but return a function have to cal
