const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const a = myNumers.map( (i) => i+10)//value return korbe
//{} ->ay braket use korle return use kora lagbe
// console.log(a);
const b = myNumers.map( (i) => i*10).map((i) => i+23).filter((num) => num>=40)
console.log(b);
