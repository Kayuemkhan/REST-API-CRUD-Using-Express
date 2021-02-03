// Javascipt Basics

/*
1. Variable:
var  a = 1
var b = 2
console.log(a+b)
*/

// // Object 
// let person={
//     name:"Abdul",
//     age:30
// };
// person.age = 2000
// // Entering the elements
// console.log(person)

// // Arrays

// let selectedColors = ["red","blue"]
// selectedColors[2] = "green"
// console.log(selectedColors.length)

// // Functions 

function roll(){
    console.log("hello")
}
roll();
// Functions with paramets:

function a(a){
    console.log(a)
}

a(8+8)

// Arrow Functions
var hello = () => {
  return "Hello World!";
}
console.log(hello())

// arrow functions with parameters

var hello_2 = (a) =>{
    return 7+a
}

console.log(hello_2(2+2))