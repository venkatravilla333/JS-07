

//How to examine DOM

console.log(document)
console.dir(document)

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









