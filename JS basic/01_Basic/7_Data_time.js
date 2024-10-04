let mydate = new Date();
console.log(mydate)
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);//object

let mycreateDate = new Date(2023,0,23)
console.log(mycreateDate.toDateString());//month 0 thake start hobe
let mycreateDate2 = new Date(2023,0,23,5,6)
console.log(mycreateDate2.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());



newDate.toLocaleString("default",{
    weekday:"long",
})






