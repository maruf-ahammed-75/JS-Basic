//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const v =232
const v1 = 2323.23

const id = Symbol("123");
const id2 = Symbol("123");
// value same pass korsi kintu Symbol change kore disse 
// console.log(id == id2);//-> false
const bignumber = 34343434343434343434
// console.log(bignumber);

// Reference (Non primitive)

// Array, Objects, Functions

const a = ["fsdf","fasdf","asdf",456]
// console.log(a);


//object
let object1 = {
    //object single
    name : "Maruf",
    age : 22,
    relation : "single",
}

const myFunction = function(){
    console.log("hello girls");
    
}


// +++++++++++++++++++++++++++++++++++++++

// stack(primitive) , heap(non primitive)
// stack a kono value nile like a = b hoyle ar copy hoy
// b = 5 korle a change hobe nah
// but heap a kono value ayle like a=b hoyle ,b change korle a change hobe
let user1={
    email:"asc",
    phone:12344,
}
let user2 = user1
user2.email= "ahammedmaruf007@gmail.com"
console.log(user1);
console.log(user2);
/// 2 tay change hoya jabe karon ata heap a ache



