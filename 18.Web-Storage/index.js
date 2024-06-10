

//local storage

// how to store data in local storage

// window.localStorage.setItem('name', 'kohli')
// window.localStorage.setItem('age', 30)

var lstorageBtn = document.getElementById('lstorage')
console.log(lstorageBtn)

var lstorageFun = () => {
  localStorage.setItem('name', 'sachin')
  localStorage.setItem('age', 40)
}

lstorageBtn.addEventListener('click', lstorageFun)

//how to access localstorage items

var lstorageAccess = document.getElementById('lstorageAccess');

var lstorageAccessFun = () => {
 console.log(localStorage.getItem('name'))
 console.log(localStorage.getItem('age'))
}

lstorageAccess.addEventListener('click', lstorageAccessFun)

//How to delete local storage item

var lstorageDelete = document.getElementById('lstorageDelete');

var lstorageDeleteFun = () => {
  console.log(localStorage.removeItem('name'));
  };
  
lstorageDelete.addEventListener('click', lstorageDeleteFun);
  
//How to delete all items in local storage

var lstorageDeleteAll = document.getElementById('lstorageDeleteAll');

var lstorageDeleteAllFun = () => {
  console.log(localStorage.clear());
};

lstorageDeleteAll.addEventListener('click', lstorageDeleteAllFun);
  
  
  //how to store in session storage 

var sstorageBtn = document.getElementById('sstorage')
console.log(sstorageBtn)

var sstorageFun = () => {
  sessionStorage.setItem('name', 'dhoni')
  sessionStorage.setItem('age', 35)
}

sstorageBtn.addEventListener('click', sstorageFun)


//how to access session storage items

var sstorageAccess = document.getElementById('sstorageAccess');

var sstorageAccessFun = () => {
  console.log(sessionStorage.getItem('name'));
  console.log(sessionStorage.getItem('age'));
};

sstorageAccess.addEventListener('click', sstorageAccessFun);

//how to delete session storage item

var sstorageDelete = document.getElementById('sstorageDelete');

var sstorageDeleteFun = () => {
  console.log(sessionStorage.removeItem('name'));
  };
  
  sstorageDelete.addEventListener('click', sstorageDeleteFun);
  
//how to delete all items in session storage

var sstorageDeleteAll = document.getElementById('sstorageDeleteAll');

var sstorageDeleteAllFun = () => {
  console.log(sessionStorage.clear());
};

sstorageDeleteAll.addEventListener('click', sstorageDeleteAllFun);
  


