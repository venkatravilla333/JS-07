//IIFE



// var a = 10;

// function test() {}

// (function iife() {
//   var a = 10;
//   console.log(a)
//   function test() { }
//   console.log(iife)
// })()


//Function currying


// without

// function normalSum(a,b,c) {
//  return a+b+c
// }
// console.log(normalSum(1, 2, 3))

//with

// function fun1(a) {
//   return function fun2(b) {
//     return function fun3(c) {
//       return a+b+c
//     }
//   }
// }
// console.log(fun1(1)(2)(3))

// function calDis(price, dis) {
 
//   return price*dis
  
// }

// console.log(calDis(1000, .1))
// console.log(calDis(1000, .2))
// console.log(calDis(1000, .3))
// console.log(calDis(1000, .4))
// console.log(calDis(1000, .5))

// function calPrice(price) {

//   return function calDis(dis) {
//     return price*dis
//   }
  
// }

// var calDis = calPrice(1000)
// console.log(calDis(.1))
// console.log(calDis(.2))
// console.log(calDis(.3))
// console.log(calDis(.4))
// console.log(calDis(.5))

//first class function

// var x = () => { }
//   return function hello(){}
// x(function test(){})

//heigher order function abd callback function

// function heigherOrderFun(cb) {
//   console.log('height order')
//   cb()
//   return function test(){}
// }
// heigherOrderFun(function cb(){ console.log('callback fun')})

//pure vs impure functions

// function pure(a,b,c) {
//   return a+b+c
// }

// console.log(pure(1, 2, 3))

// function impure(a,b,c) {
//   var d = Math.random()*100
//   return a+b+c+d
// }
// console.log(impure(1,2,3))


//Recursion function

// function factorial(n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// let result = factorial(5);
// console.log(result);




