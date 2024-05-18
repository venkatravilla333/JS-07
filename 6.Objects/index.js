

//How to create an object

// Object literal way

// var obj1 = {
//   name: 'sachin',
//   age: 40,
//   play: () => {
//     console.log('play')
//   }
// }

// var obj2 = {
//   name: 'kohli',
//   age: 30,
//   play: () => {
//     console.log('play')
//   }
// }

// console.log(obj2)

// factory function way

// function test(name, age) {
  
// return {
//   name,
//   age,
//   play: () => {
//     console.log('play');
//   },
// };
  
// }

// var obj1 = test('sachin', 40)
// console.log(obj1)
// var obj2 = test('kohli',30)


// constructor functon way (ES-5)

// function test(name, age) {
  
//   this.name = name;
//   this.age = age;
//   this.play = () => {
//     console.log('play')
//   }
// }
// var obj1 = new test('sachin', 40)
// console.log(obj1)
// var obj2 = new test('kohli', 30)
// console.log(obj2)


//Classical way (ES-6)

// class test{
//  constructor(name, age) {
//    this.name = name;
//    this.age = age;
//    this.play = () => {
//      console.log('play')
//    }
//  }
// }

// var obj1 = new test('sachin', 40)
// console.log(obj1)
// var obj2 = new test('kohli', 30)
// console.log(obj2)
// console.log(typeof test)


//Objects are dynamic



// var obj = {
//   name: 'sachin',
//   play: () => {
//     console.log('Play')
//   }
// }

// console.log(obj)

//How to read obj properties

// console.log(obj.name)
// console.log(obj['name'])

//How to add new properties

// obj.age = 40

// console.log(obj)

//How to update existing property

// obj.name = 'Kohli'

// console.log(obj)

//How to delete existing property

// delete obj.age
// console.log(obj)


//How to access method in obj

// console.log(obj.play)
// obj.play()

//How to add new method to obj

// obj.go = () => {
//   console.log('Go')
// }
// console.log(obj)

//How to delete method in obj

// delete obj.play

// console.log(obj)


// var person = {
//   fname: 'virat',
//   lname: 'kohli',
//  get fullname() {
//     console.log(`${person.fname} ${person.lname}`)
//   },
//   set fullname(value) {
//    console.log(value)
//    var parts = value.split(' ')
//    console.log(parts)
//     person.fname = parts[0]
//     person.lname = parts[1]
    
//  }
// }



// console.log(person)
// // person.fullname()
// person.fullname

// person.fullname = 'venkat ravilla'

// console.log(person)



//How to iterate object

var person = {
  name: 'kohli',
  age: 30,
  play() {
    console.log('Play')
  }
}

// console.log(person)
// console.log(person.name)
// console.log(person.age)
// person.play()

// for (var x in person) {
//   console.log(x, person[x])
// }

// for (var x of person) {
//   console.log(x)
// }

// var keys = Object.keys(person)

// console.log(keys)

// var values = Object.values(person)

// console.log(values)

// var entries = Object.entries(person)

// console.log(entries)


//Copy (Clone)

//Primitives

// var x = 10

// var y = x

// console.log(x)
// console.log(y)
// y = 20
// console.log(x)
// console.log(y)

// import lodash from 'lodash'

// var lodash = require('lodash')

//Object copy

// var originalObj = {
//   name: 'sachin',
//   address: { road: 101 },
//   play: () => {
//     console.log('play')
//   }
// }

// console.log(originalObj)

// var copiedObj = originalObj //normal copy

// var copiedObj = JSON.parse(JSON.stringify(originalObj)) //deep copy
// var copiedObj = lodash.cloneDeep(originalObj) // deep copy

// var copiedObj = Object.assign({}, originalObj) // ES-5 shallow copy
// var copiedObj = {...originalObj}//  ES-6 shallow copy (spread operator)

// console.log(originalObj)
// console.log(copiedObj)

// copiedObj.name = 'kohli'
// copiedObj.address.road = 201

// console.log(originalObj)
// console.log(copiedObj)


//Math object

// var x = 10

// var y = 21

// console.log(Math.min(x, y, 20, 3))
// console.log(Math.max(x, y, 20, 3))
// console.log(Math.floor(20.9))
// console.log(Math.floor(20.1))
// console.log(Math.ceil(20.1))
// console.log(Math.ceil(20.8))
// console.log(Math.round(20.5))
// console.log(Math.round(20.8))
// console.log(Math.round(20.4))
// console.log(Math.round(20.1))
// console.log(Math.random())
// console.log(Math.floor(Math.random()))
// console.log(Math.ceil(Math.random()))
// console.log(Math.ceil(Math.random()*10))
// console.log(Math.ceil(Math.random()*100))
// console.log(Math.ceil(Math.random()*1000))
// console.log(Math.ceil(Math.random()*10000))
// console.log(Math.pow(10,3))
// console.log(Math.sqrt(25))
// console.log(Math.sqrt(9))

// console.log(Math)



// console.log(x)
//  x = 100
// console.log(x)


//Date object

// var now = new Date()

// console.log(now)

// get methods

// console.log(now.getDate())
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getHours())
// console.log(now.getMinutes())

// setMethods

// now.setFullYear(2050)
// now.setDate(20)
// now.setMonth(11)

// console.log(now)
// console.log(now.getFullYear())
// console.log(now.getDate())
// console.log(now.getMonth())

// var date1 = new Date(2040, 6, 20, 10, 20, 40) //number type

// console.log(date1)

// get methods

// console.log(date1.getFullYear())
// console.log(date1.getDate())
// console.log(date1.getMonth())
// console.log(date1.getHours())
// console.log(date1.getMinutes())
// console.log(date1.getSeconds())

//set Methods

// date1.setFullYear(2000)
// date1.setDate(10)
// date1.setMonth(10)
// console.log(date1)

// var date2 = new Date('1990 dec 31 9:15:30')

// console.log(date2)

// get methods
// console.log(date2.getFullYear())
// console.log(date2.getMonth())
// console.log(date2.getDate())
// console.log(date2.getDay())
// console.log(date2.getHours())
// console.log(date2.getMinutes())
// console.log(date2.getSeconds())

//set Methods

// date2.setFullYear(1990)
// date2.setDate(10)
// date2.setMonth(5)
// console.log(date2)


//Template string (ES-6)

var name = 'sachin'

var age = 40

// without template string 

console.log('Hi' + ' ' + name + ' ' + 'How are you' + ' ' + 'age is' + ' ' + age)

// with template string

console.log(`Hi ${name} How are you age is ${age}`)













