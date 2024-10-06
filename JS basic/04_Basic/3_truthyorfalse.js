//truthy or false
const email = "sfddsf"

if(email){
    console.log("Yes");
    
}
else {
    console.log("NO");
    
}

// falsy values - false, 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy values -> "0", 'false', " ", [], {}, function(){}

let val1;

val1 = null ?? 10 ?? 20
console.log(val1);


