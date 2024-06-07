


//Regular function

function test() {
  return 100
  return 200
  return 300
}

console.log(test())

//Generator function

function* genFun() {
  try {
    yield 100
    } finally {
      yield 200
      yield 300
      
  }
}

var genObj = genFun()
console.log(genObj.next())
console.log(genObj.return())
console.log(genObj.next())
console.log(genObj.next())


