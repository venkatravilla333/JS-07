// function definations

// function declaration
// var x = 10

// function test() {
//   var x = 100
// }

// test()

// function expression

// named function exp

// var x = 10

// var hello = function test() {
//   var x = 100
// }

// hello()

//Params vs arguments

// var  test = (a,b,c)=> {
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }
// test(1,2,3)


// Defalut parameter (ES-6)

// function test(a=1,b=2,c=3, d=4, e=undefined, f=null) {
//   console.log(a)
//   console.log(b)
//   console.log(c)
//   console.log(d)
//   console.log(e)
//   console.log(f)
// }
// test(10, true, undefined, null, null, undefined)

//Varying of params vs arguments

//arguments object (ES-5)

// function test() {
  // console.log(arguments)
  // without using loop 

  // console.log(arguments[0])
  // console.log(arguments[1])
  // console.log(arguments[2])
  // console.log(arguments[3])
  // console.log(arguments[4])
//   console.log(typeof arguments)
//   console.log(Array.isArray(arguments))
//   var sum = 0

  // with using loop 

//   for (var value of arguments) {
//     console.log(value)
//     sum += value
//   }
//   return sum
// }

// console.log(test(1, 2, 3, 4, 5))

// Rest operator (ES-6)

// function test(...x) {
//   console.log(x)
//   console.log(typeof x)
//   console.log(Array.isArray(x))
//   // without using loop
//   // console.log(x[0])
//   // console.log(x[1])
//   // console.log(x[2])
//   // console.log(x[3])
//   // console.log(x[4])
 
//   return x.reduce((cum, cur) => {
//    console.log(cum, cur)
//    return cum+cur
//   }, 0)
// }
// console.log(test(1,2,3,4,5))


// Scope

//storage in global

// var a = 1

// let b = 2

// const c = 3
// //Access in global

// console.log(a)
// console.log(b)
// console.log(c)

// function test() {

//   //storage in functional scope
//   console.log(a)
//   var a = 100
//   console.log(a)

//   var d = 4
//   let e = 5
//   const f = 6

//   //access in functional scope
//   console.log(a)
//   console.log(b)
//   console.log(c)
//   console.log(d)
//   console.log(e)
//   console.log(f)
  
//   if (true) {

//     //storage in block

//     var g = 7
//     let h = 8
//     const i = 9
    
//     //access in block scope
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
//     console.log(e)
//     console.log(f)
//     console.log(g)
//     console.log(h)
//     console.log(i)
//   }

//   console.log(g)
//   // console.log(h)
//   // console.log(i)
// }

// // console.log(d)
// // console.log(e)
// // console.log(f)
// // console.log(g)
// // console.log(h)
// // console.log(i)

// test()



// Hoisting

// console.log(a)
// var a = 'sachin'
// console.log(a)
// const a = 'sachin'

// console.log(b)
// var b = 40
// console.log(b)

// console.log(c)
// var c = true
// console.log(c)

// console.log(d)
// var d
// console.log(d)

// console.log(e)
// var e = null
// console.log(e)


// console.log(f)
// var f = { value: 100 }
// console.log(f)

// console.log(g)
// var g = [1, 2, 3]
// console.log(g)

// console.log(h)
// // h()
// var h = function test() {
//   console.log('named fun exp')
// }
// console.log(h)

// console.log(i)
// // i()
// var i = function () {
//   console.log('Anonymous fun exp')
// }
// console.log(i)

// // console.log(j)

// // j()
// var j = () => {
//   console.log('Arrow fun exp')
// }
// j()
// console.log(j)


// //Function declaration

// console.log(declare)
// declare()
// function declare() {
//   console.log('Fun declaration')
// }
// declare()
// console.log(declare)



// var vs let vs const 

// re-declare 

// console.log(x)
// var x = 10

// console.log(x)

// console.log(x)
// var x = 100
// let x = 100
// const x = 100

// console.log(x)

//Re-assignment

// var x = 10
// let x = 10
// const x = 10
// console.log(x)

// x = 100
// console.log(x)

// x = 'sachin'

// console.log(x)

//Initilization

// var x 
// let x 
// const x

// console.log(x)

// x = 10
// console.log(x)


// Closure 


function outer() {
  var x = 'sachin'

  function inner() {
    var y = 'kohli'
    console.log(x)
    console.log(y)
  }
  // return inner
  inner()
}

outer()
// var inner = outer()

// inner()






  





