
var timeout = setTimeout(() => {
  console.log('timeout')
}, 4000)

var interval = setInterval(() => {
  console.log('interval')
}, 4000)

clearTimeout(timeout)

clearInterval(interval)



