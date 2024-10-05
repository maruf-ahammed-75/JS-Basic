function SayName() {
    console.log("Maruf");
    
}
// SayName() // call korsi
function add(num1 , num2){// num1 ,num2 is perameter
    return num1+num2
}
// console.log(add(4,4));//call korsi
// jay value pass korbo sayta argument


let x = add(3,3)
// console.log(x);

function login(userName = "Maruf"){//default value Maruf dawa hoyse
    if(!userName){
        console.log(`please give the user name`);
        return;
    }
    else return `${userName} just login`
}
console.log(login("Jakariea"));
login();//kisu nah dile undefine asbe


function calculatePrice(x,y,...num){//ata rest or spreed operator
    return num
}
// console.log(calculatePrice(100,200,300));
let a = calculatePrice(100,200,300,45,45,45,4,54,5)//first ar 2 ta sara sob gula array te add hobe

console.log(a);

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}


