

//How to examine DOM

// console.log(document)
// console.dir(document)

//How to read dom properties

// console.log(document.title)
// console.log(document.doctype)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.all)
// console.log(document.links)
// console.log(document.forms)
// console.log(document.forms)
// console.log(document.images)

//How to select dom elememts into js file

// var element = document.getElementById('myid-1') //id
// var element = document.getElementsByClassName('myclass') //class
// var element = document.getElementsByTagName('p') // tag name
// var element = document.querySelector('#myid-1') // queryselector
// var element = document.querySelector('.myclass') // queryselector
// var element = document.querySelector('p') // queryselector
// console.log(element)
// var element = document.querySelectorAll('#myid-1') // queryselectorall
// var element = document.querySelectorAll('.myclass') // queryselectorall
// var element = document.querySelectorAll('p') // queryselectorall
// console.log(element)

// console.log(Array.isArray(element))

// console.log(element[0])
// console.log(element[1])

// element[0].style.background = 'green'
// element[1].style.background = 'yellow'

// console.log(Array.isArray(element))

// for (var x of element) {
//   console.log(x)
//   x.style.background = 'blue'
// }

// element.style.background = 'red'
// element.style.color = 'white'
// element.style.fontSize = '30px'

// element.innerText = 'para-1 updated'

// console.log(element)

//Traversing of DOM

// var currentElement = document.getElementById('currentdiv')
// console.log(currentElement)

// // element to parent

// var parent = currentElement.parentElement
// parent.style.background = 'blue'

// //element to previous sibling

// var preSibling = currentElement.previousElementSibling
// var nextSibling = currentElement.nextElementSibling

// preSibling.style.color = 'red'
// nextSibling.style.color = 'white'

// var firstChild = currentElement.firstElementChild
// var lastChild = currentElement.lastElementChild
// var childs = currentElement.children
// console.log(childs)


// firstChild.style.color = 'yellow'
// lastChild.style.color = 'cyan'
// // childs[0].style.background = 'yellow'
// // childs[1].style.background = 'yellow'

// for (var values of childs) {
//   values.style.background = 'yellow'
// }



//How to create and add elements to dom

var para = document.createElement('p')

console.log(para)

para.id = 'myid'

para.className = 'myclass'

// para.innerHTML = 'this is para'

var paraText = document.createTextNode('this is para')
console.log(paraText)

para.appendChild(paraText)

var body = document.getElementById('body')
console.log(body)

var addAfterBtn = document.getElementById('addafter')
console.log(addAfterBtn)

function addAfter() {
  body.appendChild(para)
}

addAfterBtn.addEventListener('click', addAfter)


var h1 = document.createElement('h1')

h1.id = 'myh1id'
h1.className = 'myh1class'

h1.innerHTML = 'This is heading one'


var addBeforeBtn = document.getElementById('addbefore')

function addBefore() {
  body.insertBefore(h1, para)
}

addBeforeBtn.addEventListener('click', addBefore)


//How to replace childs in dom

var div = document.createElement('div')

div.id = 'mydiv'

div.innerHTML = 'this is div'


var updateBtn = document.getElementById('update')

function update() {
  
  body.replaceChild(div, h1)
}

updateBtn.addEventListener('click', update)



var deleteBtn = document.getElementById('delete')


function deleteFun() {
  // para.remove()

  body.removeChild(para)
}

deleteBtn.addEventListener('click', deleteFun)









