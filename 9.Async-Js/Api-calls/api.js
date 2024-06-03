var getAlldata = document.getElementById('get-alldata')


function getAlldataFun() {
  fetch('https://jsonplaceholder.typicode.com/posts/').then((res)=> {
    console.log(res)
    return res.json()
  }).then((data) => {
  console.log(data)
})
  
  
}

getAlldata.addEventListener('click', getAlldataFun)