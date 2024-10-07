// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for(const i of arr){
    console.log(i);
}

const s = "maruf"
for(const i of s){
    // console.log(i);
}


//maps
//equnic value only double value nay nah
//jay order ay ache oy order ay print kore

const map = new Map()
map.set('1', "India")
map.set('2', "United States of America")
map.set('4', "France")
map.set('3', "India")

for(const i of map){
    console.log(i);
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
