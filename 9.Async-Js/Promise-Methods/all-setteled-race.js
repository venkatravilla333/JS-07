
var pr1 = new Promise((res, rej) => {
  setTimeout(() => {
    res('pr-1')
  }, 4000)
})
var pr2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej('pr-2')
  }, 2000)
})
var pr3 = new Promise((res, rej) => {
  setTimeout(() => {
    res('pr-3')
  }, 1000)
})

//race

Promise.race([pr1, pr2, pr3]).then((res) => console.log(res))
Promise.all([pr1,pr2,pr3]).then((res)=>console.log(res))
Promise.allSettled([pr1,pr2,pr3]).then((res)=>console.log(res))