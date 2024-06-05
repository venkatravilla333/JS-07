//get all items from db

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

//get single item from db

var getSingledataBtn = document.getElementById('get-singledata')



function getSingledataFun() {
  fetch('https://jsonplaceholder.typicode.com/posts/2')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
  })
}

getSingledataBtn.addEventListener('click', getSingledataFun)

//how to send data to db

var senddataBtn = document.getElementById('send-data');

var newObj = {
  userId: 110,
  title: 'hello ap',
  body: 'This is body'
}

function sendDataFun() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newObj)
  })
    .then((res) => {
    console.log(res)
    })
    .catch((err) => {
    console.log(err)
  })
}

senddataBtn.addEventListener('click', sendDataFun)

//How to update data in db

var updateBtn = document.getElementById('update-data')


function updateFun() {
  fetch('https://jsonplaceholder.typicode.com/posts/10', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newObj),
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  
}

updateBtn.addEventListener('click', updateFun)

//How to delete db item

var deleteBtn = document.getElementById('delete-data')

function deleteFun() {

   fetch('https://jsonplaceholder.typicode.com/posts/5', {
     method: 'DELETE',
   })
     .then((res) => {
       console.log(res);
     })
     .catch((err) => {
       console.log(err);
     });
  
  
}

deleteBtn.addEventListener('click', deleteFun)





