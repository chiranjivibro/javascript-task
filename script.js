// let name = "xyz";
// console.log(name);
// let num = 9842567219;
// let bool = false;
// let x = undefined;
// let a = null;

//console.log(typeof x);

// let age = 18;
// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Not an Adult");
// }

// let num = -1;
// if (num >= 0) {
//   console.log("Positive");
// } else {
//   console.log("Not positive ");
// }

// let n = 1;
// if (n % 2) {
//   console.log("Odd");
// } else {
//   console.log("Even");
// }

// let input = "b";
// if (
//   input === "a" ||
//   input === "A" ||
//   input === "e" ||
//   input === "E" ||
//   input === "i" ||
//   input === "I" ||
//   input === "o" ||
//   input === "O" ||
//   input === "u" ||
//   input === "U"
// ) {
//   console.log("Vowel");
// } else {
//   console.log("Consonant");
// }

// let num = 1;
// if (num === 0) {
//   console.log("Zero");
// } else {
//   console.log("Not Zero");
// }

// let result = 51;
// if (result % 5 === 0) {
//   console.log("Multiple of 5");
// } else {
//   console.log("Not multiple of 5");
// }

// let num = 10;
// if (num > 10) {
//   console.log("Greater than 10");
// } else {
//   console.log("10/less then 10");
// }

// let num1 = 2;
// let num2 = 4;
// if (num1 === num2) {
//   console.log("Equal");
// } else {
//   console.log("Not Equal");
// }

// for (let i = 0; i < 20; i++) {
//   console.log("hello");
// }

// let count = 0;
// for (let i = 1; i <= 20; i++)
//   if (i % 2 == 0) {
//     count++;
//   }
// console.log(count);

let totalEven = 0;
let totalOdd = 0;

for (let i = 0; i <= 20; i--) {
  if (i % 2 == 0) {
    totalEven = i;
  } else {
    totalOdd += i;
  }
}
console.log("Total Sum Even Number", totalEven);
console.log("Total Sum Odd Number", totalOdd);
