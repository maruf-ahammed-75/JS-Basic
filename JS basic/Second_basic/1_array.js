// /array
// Js array resize able
 const a = ["sdfds",1,2,3,4,5];
console.log(a);
console.log(a[0]);

const b = new Array(1,2,3,4)
console.log(b);

//method

a.push(123)
console.log(a);
a.pop();
console.log(a);


a.unshift(121)//first add hobe array ar
console.log(a);

console.log(a.includes(9));//9 ace ki nay aray ar vitor


console.log(a.indexOf(5))//index bolbe koy ache

const v  = a.join()//all value is string

console.log(v);//join dile sob value string hoya jay

///slice , splice

const x = a.slice(1,3)//1 include and 3-1=2 include
console.log(x);

console.log(a);

const y = a.splice(1,3)//1 include and 3 include and ***main array vag hoya jay splice array and main array
console.log(a);
console.log(y);
