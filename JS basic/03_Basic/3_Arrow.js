const user = {
    name : "maruf",
    id : 1234,
    wellcome:function(){///current context refer korte hoyle this use kora lagbe
        console.log(`${this.name} Wellcome this page`)
        
    },
    // console.log(this),
    

}
user.wellcome()
user.name = "Nayeem"
user.wellcome()

function chai(){
    let username = "hitesh"
    console.log(this);
}
chai()

// const one = function(){
//     let name = "Maruf"
// }

const one = ()=> {//arrow function
    let x = "Maruf"
}


const addtwo = (num1, num2) => {// 2nd braket use korle return daway lagbe
    return num1 + num2
}

const addTwo = (num1,num2 ) => (num1+num2)//2nd braket na likhle braket dawa lage nah
console.log(addTwo(43,34));




