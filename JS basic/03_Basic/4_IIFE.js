// Immediately Invoked Function Expressions (IIFE)

(function cp(){
    console.log(`db connected`);
    
})();//current kaj korbe , immediate execute hobe
// cp()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )("Maruf");//akhan ; ata dawa lagbe

