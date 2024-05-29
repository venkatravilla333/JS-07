// var button = document.createElement('button')

// button.id = 'btn'

// button.innerHTML = 'Click'

// var body = document.getElementById('body')

// body.appendChild(button)

// function btnClick(e) {
//   console.log(e)
//   console.log('button clicked')
// }


// button.addEventListener('click', btnClick)


var subChild = document.getElementById('subChild')
var child = document.getElementById('child')
var parent = document.getElementById('parent')

function subchildFun(e) {
  console.log('sub child clicked')
  console.log(e)
  console.log(e.clientX)
  console.log(e.clientY)
  console.log(e.offsetX)
  console.log(e.offsetY)
}
function childFun(e) {
  console.log('child clicked')
  // e.stopPropagation()
}
function parentFun() {
  console.log('parent clicked')
}

//event bubbling phase

subChild.addEventListener('click', subchildFun)
child.addEventListener('click', childFun)
parent.addEventListener('click', parentFun)

//event capturing phase

// subChild.addEventListener('click', subchildFun, true)
// child.addEventListener('click', childFun, true)
// parent.addEventListener('click', parentFun, true)