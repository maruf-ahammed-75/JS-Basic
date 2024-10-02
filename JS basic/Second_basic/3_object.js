const mySym = Symbol("key1")
const ob = {
    //key   //value
    [mySym]: "mykey1",
    name : "maruf",
    "full name":"Maruf Ahammed",
    id : 123,
    email : "ahammedmaruf007@gmaill.com",
    lastLogin : ["Monday","sunday"],
}
// console.log(ob["name"]);//name string a dawa lagbe karon key value all string
// console.log(ob["full name"]);

ob.email = "21201144@uap-bd.edu"

// console.log(ob.email);

// Object.frezze(ob)//all object fixed hoya gase r change hobe nah

// ob.email="sdfs"
// console.log(ob);




ob.greeting = function(){
    console.log("hello");
}
ob.greetingTwo = function(){
    console.log(`hello ,${this.email}`);
}
// console.log("first ay at kaj korse");

ob.greeting()
console.log(ob.greetingTwo());



