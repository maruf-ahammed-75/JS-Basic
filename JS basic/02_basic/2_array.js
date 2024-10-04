
const a = ["nayeem","maruf","shohag","arafat gay"]
const b = [1,2,3,4]
// console.log(a);
// console.log(b);
// a.push(b)//a ar last index a b add hoya jabe
// console.log(a);
// console.log(a[4]);

const c = b.concat(a)// print/store krte hoyle ak ta array vitor store kora lagbe
// console.log(c);

const d = [...a,...b,...c]//spreed concat and spreed same but concat is better

// console.log(d);

let x = [1,2,3,[3232,23,2,3],2323,[323,232,[34,4,3,4,33223]]]

const y = x.flat(Infinity);//infinity al depth a jabe and sob gula only single araykore dibe
// console.log(y);


console.log(Array.isArray("Maruf","sfsdfd","sdfsdf"));
console.log(Array.from("Maruf"));//all value ke array te convert kore dibe

console.log(Array.from({name: "hitesh"})) // interesting



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// all value array te convert hoya jabe
