

// var obj = {
//   name: 'kohli',
//   age: 40,
//   address: 'Delhi',
//   income: {cash: 100000, cars: ['swift', 'volo', 'balono']}
// }

//without destructure

// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.address)
// console.log(obj.income.cash)
// console.log(obj.income.cars[2])

//With destructuring

// var { name, age, address, income:{cash, cars: [c1, c2, c3]} } = obj

// var { cash, cars } = income

// var [c1, c2, c3] = cars


// console.log(name)
// console.log(age)
// console.log(address)
// console.log(cash)

var arr = ['sachin', { address: { state: 'mumbai', road: 101 }, children: ['arjun', 'sara'] }]

// var [name, { address: { state, road }, children: [c1, c2] }] = arr

var [name, obj] = arr

var { address, children } = obj

var { state, road } = address

var [c1, c2] = children

console.log(name)
console.log(state)
console.log(road)
console.log(c1)
console.log(c2)