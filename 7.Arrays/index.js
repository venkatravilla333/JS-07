

// var arr = [1, 2, 3, 4, 5]

// console.log(arr)

//How to access array values

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

//How to add new items to array

// starting

// arr.unshift(0)

// console.log(arr)

// ending

// arr.push(6)
// console.log(arr)

// anywhere

// arr.splice(0, 0, 'hi')

// console.log(arr)

// arr.splice(arr.length, 0, 'bye')

// console.log(arr)

// arr.splice(2, 0, 'one')

// console.log(arr)


//How to remove elements from array


// starting

// arr.shift()

// console.log(arr)


// ending

// arr.pop()
// console.log(arr)

// anywhere

// arr.splice(0, 1)
// console.log(arr)
// arr.splice(arr.length - 1, 1)
// console.log(arr)
// arr.splice(2, 1)
// console.log(arr)


//How to remove all items from array

// var arr1 = [1, 2, 3, 4, 5]

// var arr2 = arr1

// console.log(arr1)
// console.log(arr2)

//length

// console.log(arr1.length)

// arr1.length = 0

// arr1.splice(0, arr1.length)

// arr1 = []


// console.log(arr1)
// console.log(arr2)



//How to find items in array

//primitives

// var arr = [1, 2, 3, 4, 5, 2]

// console.log(arr.indexOf(2))
// console.log(arr.indexOf(20))
// console.log(arr.lastIndexOf(2))
// console.log(arr.lastIndexOf(20))
// console.log(arr.includes(2))
// console.log(arr.includes(20))

//reference data types

var arr = [{ course: 'react' }, { course: 'nodejs' }]

//these methods dont work for reference types

// console.log(arr.indexOf({course: 'react'}))
// console.log(arr.lastIndexOf({course: 'react'}))
// console.log(arr.includes({course: 'react'}))

// var findValue = arr.find((obj) => {
//   return obj.course === 'nodejs'
// })

// console.log(findValue)

// var findIndex = arr.findIndex((obj) => {
//   return obj.course === 'nodejs'
// })

// console.log(findIndex)


//How to iterate array

var arr = [1, 2, 3, 4, 5]

//without loop

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// for of

//It iterates only values

// for (var value of arr) {
//   console.log(value)
// }

//It iterates only keys [index num]

// for (var key in arr) {
//   console.log(key)
// }

//forEach

// var value = arr.forEach((v, i) => {
//   console.log(v, i)

//   // return 100
// })

// console.log(value)

// How to copy / clone

// var originalArr = ['sachin', { road: 101 }, () => { }]


// var copiedArr = originalArr  //Normal copy
// var copiedArr =JSON.parse(JSON.stringify(originalArr))  //Deep copy
// var copiedArr = Object.assign([], originalArr) //shallow copy
// var copiedArr = originalArr.slice() //shallow copy
// var copiedArr = [...originalArr] //shallow copy (ES-6)

// console.log('original arr', originalArr)
// console.log('copied arr', copiedArr)

// copiedArr[0] = 'kohli'
// copiedArr[1].road = 201

// console.log('original arr', originalArr)
// console.log('copied arr', copiedArr)

//Merging of arrays into one array

// var arr1 = [1, 2, 3, 4, 5]
// var arr2 = [6, 7, 8, 9, 10]
// var arr3 = [11, 12, 13, 14, 15]

// console.log(arr1)
// console.log(arr2)

// ES-5

// var mergedArr1 = arr1.concat(arr2, arr3)
// var mergedArr2 = arr2.concat(arr1, arr3)
// console.log(mergedArr1)
// console.log(mergedArr2)

//ES-6 (Spread operator)

// var mergedArr1 = [...arr1, ...arr2, ...arr3]
// var mergedArr2 = [...arr3, ...arr2, ...arr1]

// console.log(mergedArr1)
// console.log(mergedArr2)

//Join method

// var arr = [1, 2, 3, 4, 5]

// console.log(arr, typeof arr)
// console.log(Array.isArray(arr))

// var joinResult = arr.join()

// console.log(joinResult, typeof joinResult)

// var spiltResult = joinResult.split()

// console.log(spiltResult, typeof spiltResult)


//Testing of array items

// var arr = [1, 2, 3, 4, 5, 6]
// var arr = [1, 2, 3, 4, 5, -6]
// var arr = [-1, -2, -3, -4, -5, -6]

// var someResult = arr.some((value) => {
//   return value >= 0
// })

// console.log(someResult)

// var everyResult = arr.every((value) => {
//   return value >= 0
// })

// console.log(everyResult)

//Filter method

// var arr = [1, 2, 3, 4, 5]

// var filteredArr = arr.filter((value) => {
//   return value > 2
// })

// console.log(filteredArr)

// map method

// var arr = [1, 2, 3, 4, 5]

// var mapValue = arr.map((value) => {
//   return value * 100
// })

// console.log(arr)
// console.log(mapValue)

// map vs forEach

// var foreachValue = arr.forEach((value) => {
//   return value * 100
// })

// console.log(foreachValue)

// var arr = [1, 2, 3, 4, 5]

// var reduceResult = arr.reduce((cum, cur) => {
//   console.log(cum, cur)
//   return cum+cur
// }, 0)

// console.log(reduceResult)

//Flattening of an array

// var arr = [1, 2, [100, 200, [1000, 2000, ['sachin', 'kohli']]]]

//flat

// var singleArr = arr.flat(3)
// var singleArr = arr.flat(Infinity)

// console.log(singleArr)

// var singleArr = []

// function flattenFun(arr) {
//   // console.log(arr)
//   for (var value of arr) {
//     console.log(value)
//     if (Array.isArray(value)) {
//       flattenFun(value)
//     } else {
//       singleArr.push(value)
//     }
//   }
// }

// flattenFun(arr)

// console.log(singleArr)

//How to remove duplicate items from array

// var arr = [1,2,3,2,4,2,3,2,5]

//Set with spread operator

// var uniqueArr = [...new Set(arr)]

// console.log(uniqueArr)

// var uniqueArr = []

// function removeDuplicate(arr) {

//   for (var value of arr) {
//     // console.log(value)
//     if (uniqueArr.indexOf(value) === -1) {
//       uniqueArr.push(value)
//     }
//   }
  
// }

// console.log(arr)
// removeDuplicate(arr)

// console.log(uniqueArr)


//Sorting

// var arr = [1, 5, 2, 7, 9, 4]

//single value

// ascending

// var asValue = arr.sort()

// console.log(asValue)

// descending
// var dsValue = arr.reverse()
// console.log(dsValue)

//double value

// var arr = [2, 5, 3, 20, 8, 6, 12]


// var arr = [{course: 'react'}, {course: 'html'}, {course:'nodejs'}]

// var asValue = arr.sort((a,b) => {
//   // if (a < b) {
//   //   return 1
//   // } else {
//   //   return -1
//   // }
//   if (a.course > b.course) {
//     return 1
//   }
//   if (a.course < b.course) {
//     return -1
//   }
  
// })
// console.log(asValue)

//nested loop

// for (var i = 0; i < arr.length; i++){
//   for (var j = i + 1; j < arr.length; j++){
//     if (arr[i].course < arr[j].course) {
//       var temp = arr[i]
//       arr[i] = arr[j]
//       arr[j] = temp
//     }
//   }
// }

// console.log(arr)


//at method

// var arr = [1, 2, 3, 4, 5]
// var str = 'hello'

// var result = arr.at(2)
// var result = arr.at(-2)
// var result = str.charAt(-2)

// console.log(result)

//fill method (ES-6)

// var arr = [1, 2, 3, 4, 5]

// arr.fill(100)
// arr.fill('hi')

// console.log(arr)

//Array.from() method

// var str = 'hello'

// var obj = {
//   length: 5
// }

// console.log(obj)

// var result = Array.from(obj)
// console.log(result)


// function test() {
//   console.log(arguments)
//   var result = Array.from(arguments)
//   console.log(result)
// }
// test(1,2,3,4,5)



//How to convert first letter of given string to capital

// var str = 'Anilkumar'

// var x = str.charAt(0)

// var y = x.toUpperCase()

// console.log(y)
// var z = y + str.slice(1)
// var z = y.concat(str.slice(1))
// console.log(z)

// var result = str.charAt(0).toUpperCase().concat(str.slice(1))

// console.log(result)

// How to change first letter of every word as capital?


// var str = 'sachin kohli gill rahul dhoni'


// var arr = str.split(' ').map((word) => {
//  return word.charAt(0).toUpperCase().concat(word.slice(1))
// })

// console.log(arr)
// var result = arr.join(' ')
// console.log(result)

// Repeat a string given no of times.

var str = 'hi how are you'

// var result = str.repeat(10)

// console.log(result)

// function test(str, num) {
//   if (num > 0) {
//     return str.repeat(num)
//   }
// }
// console.log(test(str, 5))

//How to reverse a given string

// var str = 'hello'

// var result = str.split('').reverse().join('')

// var result = Array.from(str)

// var x = result.reverse().join('')

// console.log(x)

// How to find given string is palindrome or not?

// function palindrome(str) {
//   var reversed = str.split('').reverse().join('')
//   return str === reversed
// }

// console.log(palindrome('hello'))
// console.log(palindrome('racecar'))


//How to count number of vowels in a string?

// var str = 'hello'

// function findVowels(str) {
//   var vowels = 'aeiouAEIOU'

//   var count = 0

//   for (var char of str) {
//     if (vowels.includes(char)) {
//       count++
//     }
//   }
//   return count
// }

// console.log(findVowels(str))


// Find the logest word in a string?


// var str = 'hi how are you sachin'

// function findLongestWord(str) {
//   var logest = ''
//   var words = str.split(' ')
//   for (var word of words) {
//     if (word.length > logest.length) {
//       logest = word
//     }
//   }
//   return logest
// }

// console.log(findLongestWord(str))








