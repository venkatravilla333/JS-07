

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







