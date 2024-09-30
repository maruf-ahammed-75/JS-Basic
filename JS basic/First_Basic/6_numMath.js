const score = 400

const balance  = new Number(1000)//100% ata number e hobe
console.log(balance);
console.log(score);

console.log(balance.toString().length);//balance string a hoya jabe and otar length print hobe

console.log(balance.toFixed(2));// decimal point 2 ta dibe


// ++++++++++++++++++++++Math+++++++++++++++++++

// console.log(Math.abs(-34))
// Math.round(4.3)->4 dibe
// Math.ceil(4.3)->5
// Math.floor(34.34)->34
// Math.sqrt(45)
// Math.min(3,3,4,5,4,5,65,6,56)
// Math.max(454,4,5,45,4,54,5)
console.log(Math.random());//->random value 0-1 ar viotr a asbe 

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) 
