// // // const add = (x,y) => {
// // //   return x + y;
// // // };

// // // const subtract = (x,y) => {
// // //   return x - y;
// // // };

// // // const multiply = (x,y) => {
// // //   return x * y;
// // // };

// // // const divide = (x,y) => {
// // //   return x / y;
// // // };

// // // const apply = (x,y,cb) => {
// // //   const val = cb(x,y);
// // //   return val;
// // // }
// // // const result = apply(2,3,add);

// // // // console.log(result);

// // // // const r1 = apply(3,4,add);
// // // // const r2 = apply(20,5,subtract);
// // // // const r3 = apply(4,7,multiply);
// // // // const r4 = apply(99,9,divide);

// // // // console.log(r1,r2,r3,r4)


// // // // algorithm for adding all the numbers in an array
// // // const nums = [1,2,3,4,5,6,7,8,9,10];
// // // // let result1 = nums[0];

// // // // for(let i = 1 ; i < nums.length ; i ++){
// // // //   result1 += nums[i];
// // // // };



// // // // algorithm for multiply all the numbers in an array

// // // const reduce = (arr, cb) => {
// // //   let total = arr[0];
// // //   for (let i = 1; i < arr.length; i++){
// // //     total = cb(total, arr[i]);
// // //   }
// // //   return total
// // // }

// // // const r1 = reduce(nums,add);
// // // const r2 = reduce(nums,subtract);
// // // const r3 = reduce(nums,multiply);
// // // const r4 = reduce(nums,divide);

// // // console.log(r1,r2,r3,r4);

// // const array1 = [1, 2, 3, 4];

// // // 0 + 1 + 2 + 3 + 4
// // const initialValue = 0;
// // const sumWithInitial = array1.reduce(
// //   (previousValue, currentValue) => previousValue + currentValue,
// //   initialValue
// // );

// // console.log(sumWithInitial);
// // // expected output: 10


// // Map Method

// const arr = [2,4,6,8];

// const newArr = arr.map (x => x * 2);

// const newArr2 = arr.map((x,i) => {
//   return x * i
// });
// // console.log(newArr);
// // console.log(newArr2);


// //  filter method
// const animals = [`cat`,`dog`,`duck`,`turtle`];

// const filtered = animals.filter(el => {
//   return el !== `duck`;
// });

// // console.log(filtered)

// const someNums = [1,2,3,4,5,6];

// const even = someNums.filter (el => {
//   return el % 2 == 0
// });

// const odd = someNums.filter(el => {
//   return el % 2 != 0;
// })

// console.log(even,odd);



const names = [`superman`,`batman`,`some superHero`];
const namesHTML = names.map(aName => {
  return`<li>${aName}</li>`
})

console.log(namesHTML.join(""))