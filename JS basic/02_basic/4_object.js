// const obj = new Object()//single term obj
const obj = new Object()//non single term obj
obj.id = "1234"
obj.name = "MARUF"
// console.log(obj);


const obj2 = {
    email : "zxcvbn",
    fullName:{//full name tay akta object
        userFullName:{//ay o akta obj
            firstName:"Maruf",
            lastName:"Shuvro",

        }
    }
}
console.log(obj2.fullName);
console.log(obj2.fullName.userFullName);
console.log(obj2.fullName.userFullName.firstName);



const obj4 = {1:"a",2:"b"}
const obj5 = {3:"c",4:"d"}
//object marge
// const obj3 = Object.assign({},obj4,obj5)//{}-> ata dawa good practices
const obj3 = {...obj4,...obj5}//spreed operation
console.log(obj3);



const user=[ //data base thake kono obj ayle sayta object ar array hisabe aybe
    {
        name : "Maruf",
        id : "1234"
    },
    {
        name : "arafat",
        id : "1234"
    },
    {
        name : "shohag",
        id : "1234"
    },
    {
        name : "nayeem",
        id : "1234"
    }
]
console.log(user[0]);
console.log(user[0].name);

/////important
console.log(obj3);
console.log(Object.keys(obj3))
console.log(Object.values(obj3))
//ata korle all keys pawa jabe and kaj a lagle por a keys upor loop chalano jabe
console.log(obj3.hasOwnProperty('isLoggedIn'));//isLoggedIn value obj3 te ache ki nah bolbe


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
//////////onject destructer
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

