// HOF => HIGHER ORDER FUNCTION
// CALLBACK
// Function is calling a function
// Higher order function is function whicj take other function as a parameter or return a function as a value.a function passed as a parameter is callback.


// function a(){
//     console.log("I was called by a function");
// }

// function b(){
//     a()
// }

// b();

// mini program
// const callback = (n) => {
//    return n**2;
// };

// function cube (callback, n){
//     return callback(n)/n ;
// }

// console.log(cube(callback, 4));

const arr = ["hi","hello", "welcome", "namaste", "pranam"];
// arr.forEach((azz)=>{
//    console.log(azz);
// });

// arr.forEach(myfunc);
// function myfunc(df){
//     console.log(df);
// }

// setTimeout

// setTimeout(() => {
//     console.log("hello javascript class");
// }, 1000);

// setTimeout(() => {
//     console.log("😂😊");
// }, 2000);

// for each
// map
// filter
// reduce
// find
// every
// some
// sort

// map
// const numbers =[1,2,3,4,5,6];
// const xyz=numbers.map((n)=>n+n);
// console.log(xyz);

// filter
// const country= [
//     "india","pakistan","irland","finland","newzeland","turkistan","japan"
// ]
// const xyz=country.filter((azz)=>azz.includes("is"));
// console.log(xyz);

// const num = [1,2,3,4,5,6];
// const sum =num.reduce((acc, curr)=>acc+curr,2);

// console.log(sum);


// sort

// const names =[
//    "Azhar",
//    "Ansari",
//    "Deepak",
//    "ali",
//    "Sumant",
//    "dhananjay",
//    "rakesh",
//    "Anurag",
//    "nilam"
// ]

// const xyz=names.sort();
// console.log(xyz);
// console.log(names.reverse());

// destructuring and spread and rest

// const sci =[2.72, 3.14, 9.81, 37, 100];
// let [e, pi, grav, bodytemp, boiltemp] = sci

// console.log(e, pi, grav, bodytemp, boiltemp);

// const arr1=[1,2,3];
// let [var1, var3]= arr1
// console.log(var1,var3);

const arr2 = [1,2,3,4,5,6,7,8,9];
let [num1, num2, ...rest]=arr2
console.log([num1,num2]);
console.log(rest);