const prompt=require("prompt-sync")();
let a=prompt("enter the number :")
let result=a.toString().split('').reverse().join('');
console.log(result)