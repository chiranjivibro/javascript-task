// let i = 1;
// do {
//   console.log("hello", i);
//   i++;
// } while (i < 5);

//

// let i = 0;
// while (i < 10) {
//   console.log("hello world");
//   i++;
// }

// let a = 2;
// while (a <= 100) {
//   console.log(a);
//   a += 2;
// }

// let a = 0;
// b = 1;
// while (b <= 100) {
//   if (b % 2 === 0) {
//     a++;
//   }
//   b++;
// }
// console.log("total even number from 1 to 100", a);

// let count = 0;
// numb = 1;
// do {
//   if (numb % 2 === 0) {
//     count++;
//   }
//   numb++;
// } while (numb <= 100);
// console.log("total even number 1 to 100", count);

// let x = 10.7;
// console.log((x % 1).toFixed(1));

// let name = "chiranjivi hello";
// // console.log(name.length, name);
// // console.log(name[15]);
// console.log(name[name.length - 1]);

// let name = "hello";
// let reserved = "";

// for (let i = name.length - 1; i >= 0; i--) {
//   reserved += name[i];
// }
// console.log(reserved);

// let name = "hello";
// for (let i = name.length - 1; i >= 0; i--) {
//   console.log(name[i]);
// }

// let name = "chiranjivi";
// let lastName = "tharu";
// let fullName = name + lastName + " " + lastName;
// console.log(fullName);

// let x = 5;
// let message = `sum is ${x}`;
// console.log(message.length);

// let str = " chiranjivi  hello";
// // console.log(str.toUpperCase());
// console.log(str.replace("chiranjivi", "pushpa"));

// let arr = [1, 2, 3, 4, 5, 6];
// // console.log(arr[4]);
// // console.log(arr[arr.length - 2]);
// let index = arr.length - 2;
// console.log(arr[index]);

// let arr = [1, 2, 3, 4, 5, 6];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// function sum(arr) {

//   console.log(arr);
// }
// sum([1, 2, 3, 4, 5]);

// function sum(arr) {
//   let SumNum = 0;
//   for (let i = 0; i < arr.length; i++);{

//     if (i == 2) {
//       break;
//     }
//     SumNum = SumNum + arr[i];
//   }
//   console.log("SumNum:" ,SumNum);
// }
// sum([1, 2, 3, 4, 5]);

// let arr = [1, 2, 3, 4, 5];
// // arr = arr.push(6);
// arr = arr.pop();
// console.log(arr);

const sum = require('./scripts1')
let x = sum(2,3)
console.log(x)
