import arr from './module2.js'

var y = 100

var obj2 = { name: 'kohli', age: 30 }

var test2 = () => {
  console.log('test2')
}

console.log(arr)

export { y, obj2 } //named export

export default test2


