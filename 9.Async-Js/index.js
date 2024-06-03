
// console.log('Hi')
// console.log('Hello')
// console.log('Bye')


// console.log('Hi')

// setTimeout(() => {
//   console.log('Timer-1')
// }, 2000)

// Promise.resolve().then(() => { console.log('PR-1') }).then(() => { console.log('PR-2') })

// setTimeout(() => {
//   console.log('Timer-2')
// }, 5000)

// console.log('Bye')
// var data

// function getData(num, displayData) {
//   setTimeout(() => {
//     // data = [
//     //   { pName: 'laptop', pPrice: 45000 },
//     //   { pName: 'mobile', pPrice: 25000 },
//     //   { pName: 'tv', pPrice: 60000 },
//     // ];
//     data = num*num
//     displayData(data)
//   }, 4000)
// }

// getData(2, function displayData(res1) {
//   console.log(res1);
//   getData(res1, function displayData(res2) {
//     console.log(res2)
//     getData(res2, function displayData(res3) {
//       console.log(res3)
//       getData(res3, function displayData(res4) {
//         console.log(res4);
//         getData(res4, function displayData(res5) {
//           console.log(res5);
//           getData(res5, function displayData(res6) {
//             console.log(res6);
//           });

//         });
//       });
//     });
    
//   })
// });


// var data

// function getData(num) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       // data =  [
//       //    { pName: 'laptop', pPrice: 45000 },
//       //   { pName: 'mobile', pPrice: 25000 },
//       //   { pName: 'tv', pPrice: 60000 },
//       // ];
//       // res(data)
//       data = num*num
//       res(data)
//     }, 4000)
//   })
// }

// getData(2)
//   .then((res1) => {
//     console.log(res1);
//     return getData(res1);
//   })
//   .then((res2) => {
//     console.log(res2);
//     return getData(res2);
//   })
//   .then((res3) => {
//     console.log(res3);
//     return getData(res3);
//   })
//   .then((res4) => {
//     console.log(res4)
//    return getData(res4)
//   })
//   .then((res5) => {
//     console.log(res5)
//   })


// var data

// function getData(num) {
//  return new Promise((res, rej) => {
//     setTimeout(() => {
//       // data =    [
//       //     { pName: 'laptop', pPrice: 45000 },
//       //   { pName: 'mobile', pPrice: 25000 },
//       //   { pName: 'tv', pPrice: 60000 },
//       // ]
//       data = num*num
//       res(data)
//     }, 4000)
//   })
// }


// async function displayData() {
//   var res1 = await getData(2)
//   console.log(res1)

//   var res2 = await getData(res1)
//   console.log(res2)

//   var res3 = await getData(res2)
//   console.log(res3)
  
//   var res4 = await getData(res3)
//   console.log(res4)
  
//   var res5 = await getData(res4)
//   console.log(res5)
  
// }

// displayData()











