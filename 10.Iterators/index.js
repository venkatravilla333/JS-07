

// var iterable = [1, 2, 3, 4, 5]

// console.log(iterable)

// var iteratorObj = iterable[Symbol.iterator]()

// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())

// for (var value of iterable) {
//   console.log(value)
// }

// var person = {
//   fName: 'virat',
//   lName: 'kohli',
//   age: 40,
//   address: 'delhi'

// }


// person[Symbol.iterator] = function () {

//   var properties = Object.keys(person)

//   var count = 0

//   var next = ()=> {
//     if (count >= properties.length) {
//     return  {done: true, value: undefined}
//     }
//     return {done: false, value: person[properties[count++]]}
//   }
//   return { next }

// }

// var iteartorObj= person[Symbol.iterator]()



// console.log(iteartorObj.next())
// console.log(iteartorObj.next())
// console.log(iteartorObj.next())
// console.log(iteartorObj.next())
// console.log(iteartorObj.next())

// for (var value of person) {
//   console.log(value)
// }


