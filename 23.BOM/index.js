// console.log(window)
// console.log(window.document)
// console.log(window.navigator)
// console.log(window.screen)
// console.log(window.location)
// console.log(window.history)

// console.log(window.innerWidth)
// console.log(window.innerHeight)
// console.log(window.screen.width)
// console.log(window.screen.height)

// window.setTimeout(() => {
//   console.log('timeout')
// }, 4000)
// window.setInterval(() => {
//   console.log('interval')
// }, 4000)

// window.localStorage()
// window.sessionStorage()
// window.fetch()

// window.alert('hello')
// window.prompt('hello')
// window.confirm('hello')


//how to open

// var myWin
// var openwin = document.getElementById('open')

// var openwinFuc = () => {
// myWin =  window.open('', '', 'width = 600px, height = 50px')
// }

// openwin.addEventListener('click', openwinFuc)

// // how to close
// var closewin = document.getElementById('close')

// var closewinFun = () => {
//   myWin.close()
// }

// closewin.addEventListener('click', closewinFun)

// //how to move

// var movewin = document.getElementById('move')

// var movewinFun = () => {
//   return myWin.moveTo(700, 400)
// }
// movewin.addEventListener('click', movewinFun)

// //how to resize

// var resizewin = document.getElementById('resize')

// var resizewinFun = () => {

//    return myWin.resizeTo(50, 500);
// }

// resizewin.addEventListener('click', resizewinFun)


//document object

// window.document.getElementById()
// window.document.createElement()
// window.document.title

//navigator object

// console.log(window.navigator)
// console.log(window.navigator.appName)
// console.log(window.navigator.platform)
// console.log(window.navigator.language)
// console.log(window.navigator.onLine)

//screen object

// console.log(window.screen)
// console.log(window.screen.width)
// console.log(window.screen.height)

//location object

// console.log(window.location)
// console.log(window.location.href)
// console.log(window.location.hostname)
// console.log(window.location.pathname)
// console.log(window.location.port)
// console.log(window.location.protocol)

// var loadDoc = document.getElementById('load')

// var loaddocFun = () => {
//   window.location.assign('https://www.google.co.in/');
// }

// loadDoc.addEventListener('click', loaddocFun)

//history object

// console.log(history)


var forwardBtn = document.getElementById('forward')

var forwardFun = () => {
  window.history.forward()
}

forwardBtn.addEventListener('click', forwardFun)



