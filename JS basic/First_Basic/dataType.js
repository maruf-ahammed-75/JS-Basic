//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const v =232
const v1 = 2323.23

const id = Symbol("123");
const id2 = Symbol("123");
// value same pass korsi kintu Symbol change kore disse 
console.log(id == id2);//-> false
const bignumber = 34343434343434343434
console.log(bignumber);





// Reference (Non primitive)

// Array, Objects, Functions

const a = ["fsdf","fasdf","asdf",456]
console.log(a);


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
