
// console.log('Hi')
// console.log('Hello')
// console.log('Bye')


console.log('Hi')

setTimeout(() => {
  console.log('Timer-1')
}, 2000)

Promise.resolve().then(() => { console.log('PR-1') }).then(() => { console.log('PR-2') })

setTimeout(() => {
  console.log('Timer-2')
}, 5000)

console.log('Bye')