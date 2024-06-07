
import test2 from './module1.js' //default import
import { y, obj2 } from './module1.js' //named import
import arr from './module2.js'
var x = 10

var obj1 = { name: 'sachin', age: 40 }

var test1 = () => {
  console.log('test1')
}

console.log(x)
console.log(obj1.name)
console.log(obj1.age)
test1()

console.log(y)
console.log(obj2.name)
console.log(obj2.age)
test2()
console.log(arr)