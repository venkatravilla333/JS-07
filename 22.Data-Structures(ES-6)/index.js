

//how to create

// var obj = {}
// console.log(obj)

// var myMap = new Map()
// console.log(myMap)

//how to initialize

// var obj = {
//   name: 'sachin',
//   age: 40
// }
// console.log(obj)

// var myMap = new Map([['name','sachin'], ['age', 40]])
// console.log(myMap)

//how to add new properties

// var obj = {}

// obj.name = 'sachin'
// obj.age = 40
// obj['color'] = 'red'
// obj['height'] = 5
// console.log(obj)

// var myMap = new Map()

// myMap.set('name', 'sachin')
// myMap.set('age', 40)
// console.log(myMap)

//how to access properties

// var obj = {
//   name: 'sachin',
//   age: 40
// }

// console.log(obj.name)
// console.log(obj.age)
// console.log(obj['name'])
// console.log(obj['age'])

// var myMap = new Map()

// myMap.set('name', 'sachin')
// myMap.set('age', '40')

// console.log(myMap.get('name'))
// console.log(myMap.get('age'))

//keys

// var obj = {
//   name: 'sachin',
//   10: 10,
//   true: 'true',
//   undefined: 'undefined',
//   null: 'null',
//   [Symbol('symbolKey')]: 'symbolValue',
// };

// for (var key in obj) {
//    console.log(key, typeof(key))
// }

// var myMap = new Map()

// myMap.set('name', 'sachin')
// myMap.set(10, 'sachin')
// myMap.set(true, 'sachin')
// myMap.set(undefined, 'sachin')
// myMap.set(null, 'sachin')
// myMap.set({}, 'sachin')
// myMap.set([], 'sachin')
// myMap.set(() => { }, 'sachin')

// for (var keys of myMap.keys()) {
//   console.log(typeof keys)
// }

//how to check specific key is there

// var obj = {
//   name: 'sachin',
//   age: 40
// }
// console.log('name' in obj);
// console.log('age' in obj);
// console.log('color' in obj);
// console.log(obj.hasOwnProperty('name'));
// console.log(obj.hasOwnProperty('age'));
// console.log(obj.hasOwnProperty('color'));

// var myMap = new Map()

// myMap.set('name', 'sachin')
// myMap.set('age', 40)

// console.log(myMap)

// console.log(myMap.has('name'))
// console.log(myMap.has('age'))
// console.log(myMap.has('color'))

// //how to find lenth

// var myobj = Object.keys(obj)
// console.log(myobj.length)


// console.log(myMap.size)


// var obj = { name: 'sachin', age: 40 }
// console.log(Object.keys(obj).length)

//how to delete specific key

var obj = {
  name: 'sachin',
  age: 40
}

// delete obj.name
// console.log(obj)
// delete obj.age
// console.log(obj)

var myMap = new Map()

myMap.set('name', 'sachin')
myMap.set('age', 40)

// myMap.delete('name')
// myMap.delete('age')
// console.log(myMap)

//how to delete all keys

// delete obj
// obj = {}

// for (var key in obj) {
//   delete obj[key]
// }
// console.log(obj)

// console.log(myMap)
// myMap.clear()
// console.log(myMap)

// how to loop

// for (var key in obj) {
//   console.log(obj[key])
// }

// console.log(myMap.keys())
// console.log(myMap.values())
// console.log(myMap.entries())

// how to convert

// var newmap = new Map(Object.entries(obj)) //obj=>array=>map
// var newobj = Object.fromEntries(newmap)  //map =>obj

// console.log(newmap)
// console.log(newobj)

//how to destructure

// var { name, age } = obj

// console.log(name)
// console.log(age)

console.log(myMap.get('name'))
console.log(myMap.get('age'))


var [v1, v2] = myMap

var [name] = v1
var [age] = v2
console.log(name)
console.log(age)









