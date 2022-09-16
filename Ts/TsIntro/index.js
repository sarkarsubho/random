// 1.
// Boolian
let isDone = false;
isDone = true;
//number
let price = 10;
console.log(price);
//String
let my_name = "subhankar";
console.log(my_name);
// boolian
let isFatching = false;
// array of Numbers
let arr1 = [1, 2, 2, 4, 4];
//create an array of strings (using array constructor generic type)
let arr2 = new Array("dsds", "fsdfsdf");
console.log(arr2);
//create a tuple , which keeps a string as the first value, and boolean as the second
let tuple;
tuple = [my_name, isDone];
//create an enum
//it should have User, SuperUser, Admin, SuperAdmin
// Enams are the grup of constants : it is like a object :if you gives the value then it takes the value otherwise it takes the index of it;
//it can be both : 1=user or user =1 it can be called by both key and value
var Color;
(function (Color) {
    Color["User"] = "subhankar";
    Color["SuperUser"] = "";
    Color["Admin"] = "masai";
    Color["SuperAdmin"] = "nrupul";
})(Color || (Color = {}));
console.log(Color.User);
var enem2;
(function (enem2) {
    enem2[enem2["User"] = 0] = "User";
    enem2[enem2["SuperUser"] = 1] = "SuperUser";
    enem2[enem2["Admin"] = 2] = "Admin";
    enem2[enem2["SuperAdmin"] = 3] = "SuperAdmin";
})(enem2 || (enem2 = {}));
console.log(enem2.User);
//create a function that takes 2 arguments, x, y both numbers
//it should return the product of the 2 numbers
const sum = (x, y) => {
    return x + y;
};
console.log(sum(6, 5));
//  create a function that takes 2 arguments, x ,y both numbers,
// it should divide output ( x / y )
const divide = (x, y) => {
    return x / y;
};
console.log(divide(6, 5));
//create a function that takes a name and prints it without returning anything
const voidFunction = (name) => {
    console.log(name);
};
voidFunction("subhankar");
const obj = {
    title: "masai",
    status: false,
    id: 10,
};
const getName = ({ first_name, last_name }) => {
    console.log(`${first_name} ${last_name ? last_name: ""}`);
};
let person1 = {
    first_name: "subhankar",
    //  last_name:"abc"
};
getName(person1);
let adreass = {
    houseNumber: 12,
    street: "kali-12",
    city: "jani na",
    state: "didir rajjo",
    postalCode: 123654,
    country: "dadar des",
};
// .5
// create a function PhoneBook
// it should accept PersonDetails type argument
// it should push into an array containing all persons
let pd = {
    prefix: "Mr",
    phones: [123, 12365, 11236],
    address: [adreass, adreass],
    email: "string@mail.com",
    first_name: "subhankar",
    last_name: "sarkar",
    middlename: "aswm",
};
function PhoneBook(PertionalDetails) {
    console.log(PertionalDetails);
}
PhoneBook(pd);
function UserOrAdmin(obj) {
    return obj.type;
}
let admin = {
    type: "admin",
    name: "string",
    age: 12,
    role: "string",
};
let user = {
    type: "user",
    name: "kalachand",
    age: 23,
    ocupation: "developer",
};
console.log(UserOrAdmin(user));
console.log(UserOrAdmin(admin));
//# sourceMappingURL=index.js.map