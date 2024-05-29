var table = document.getElementById('table')

console.log(table)

function tableClick(e) {
  // console.log('clicked')
  console.log(e.target)
}

table.addEventListener('click', tableClick)