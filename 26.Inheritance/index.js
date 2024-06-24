

//How to find prototype

// var obj = {}
// console.log(obj)

// console.log(Object.getPrototypeOf(obj))
// console.log(obj.__proto__)
// console.log(Object.prototype)

// function Test() {
//   this.play = function () {
//     console.log('own play')
//   }
// }
// var obj1 = new Test()
// console.log(obj1)

// console.log(Object.getPrototypeOf(obj1))
// console.log(obj1.__proto__)
// console.log(Test.prototype)

// var arr = []

// console.log(arr)
// console.log(Object.getPrototypeOf(arr))
// console.log(arr.__proto__)
// console.log(Array.prototype)

// var obj = {
//   name: 'sachin'
// }

// Object.prototype.play = () => {
//   console.log('play')
// }

// console.log(Object.prototype)

// obj.toString = () => {
//   console.log('hello')
// }

// console.log(Object.prototype)

// console.log(obj)
// console.log(obj.toString())

// for (var key in obj) {
//   console.log(key)
// }

// var objectBase = Object.getPrototypeOf(obj)
// console.log(objectBase)

// var propertyDescriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')
// console.log(propertyDescriptor)

// Object.defineProperty(obj, 'name', {
//   configurable: false,
//   enumerable: false,
//   writable: false
// })

// delete obj.name
// obj.name = 'kohli'

// console.log(obj)

// console.log(Object.keys(obj))

// for (var key in obj) {
//   console.log(key)
// }

// console.log(Object.getOwnPropertyDescriptor(obj, 'name'))


var myObj = {
  name: 'dhoni',
  age: 35,
  // play: () => {
  //   console.log('play')
  // }
}


// var objBase = Object.prototype.go = function () { }
// console.log(objBase)

// Object.prototype.play = () => {
//   console.log('play')
// }

// var objbase = Object.getPrototypeOf(myObj)
// console.log(Object.getOwnPropertyDescriptor(objbase, 'play'))

// console.log(Object.getOwnPropertyDescriptor(myObj, 'name'))
// console.log(Object.getOwnPropertyDescriptor(myObj, 'age'))
// console.log(Object.getOwnPropertyDescriptor(myObj, 'play'))


//How to create own inheritance

// function Wood(name) {
//   this.name = name
// }

// Wood.prototype.cut = function () {
//   console.log('cut')
// }

// var w = new Wood('sachin')
// console.log(w.name)

// Chair.prototype = Object.create(Wood.prototype)
// Chair.prototype.constructor = Chair
// Table.prototype = Object.create(Wood.prototype)
// Table.prototype.constructor = Chair

// console.log(new Chair.prototype.constructor)

// function Chair(name) {
//   this.age = 40
//   Wood.call(this, name) // es-6 super()
// }

// Chair.prototype.cut = function () {
  //   console.log('cut')
  // }

//   var c = new Chair('kohli')
// console.log(c)
// c.cut()
// console.log(c.name)

// function Table(name) {
//   Wood.call(this, name) // es-6 super()
  
// }
// var t = new Table('Dhoni')
// t.cut()
// console.log(t.name)



//method overriding



function Test() {
  
  this.play = function () {
    Test.prototype.play.call(this)
    console.log('own play')
  }
}

Test.prototype.play = () => {
  console.log('proto play')
}

var test1 = new Test()

test1.play()









