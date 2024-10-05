{}//atay scope
let a = 3000
if(1){
    let a = 90
    // console.log(a);//inner scope
    
}
// console.log(a);//global scope



///nested scope

function one(){
    let userName = "Maruf"

    function two(){
        const YoutubeName = "SUUUUUUUU..."
        console.log(userName);
    }
    // console.log(YoutubeName) // ay line kaj korbe nah8
    two()
}
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(add(5))

function add(num){
    return num + 1
}


// addTwo(5)//ata wrong
const addTwo = function(num){// ay vabaw function declear kora jay
    return num + 2
}
addTwo(5)