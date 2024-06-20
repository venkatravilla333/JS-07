

console.log('hello')
console.log(100)
console.log(true)
console.log(undefined)
console.log(null)
console.log({})
console.log([])
console.log(()=>{})
console.log(new Map())
console.log(new WeakMap())
console.log(new Set())
console.log(new WeakSet())
// console.log(x)

// alert(() => { })

// var value = prompt('enter value')

// if (value) {
//   console.log(value)
// } else {
//   console.log(value)
// }

// var value = confirm()
// console.log(value)

// document.write('Hello')
// document.write('<h1>Hello</h1>')

// var loadBtn = document.getElementById('load')

// var loadFun = () => {
//   document.write('new content')
// }

// loadBtn.addEventListener('click', loadFun)

var btnOne = document.getElementById('one')
var btnTwo = document.getElementById('two')
var btnThree = document.getElementById('three')

var mypara = document.getElementById('mypara')

var htmlFun = () => {
  console.log('html')
  mypara.innerHTML = `This element is                   <strong>strong</strong>
   and has  <br />
   some    super fun <code>code</code>!`;
  
}


var textFun = () => {
  mypara.innerText = `This element is <strong>strong</strong> 
  and has  <br />
  some    super fun <code>code</code>!`;
  
}

var contentFun = () => {
  console.log('content')
  mypara.textContent = `This element is <strong>strong</strong>
   and has  <br />
   some    super fun <code>code</code>!`;
  
}


btnOne.addEventListener('click', htmlFun)
btnTwo.addEventListener('click', textFun)
btnThree.addEventListener('click', contentFun)