// Sometimes global scope create polution
// so in order remoove pollution of global scope we use IIFE

// ()() ====> (with function definition)(funtion execution)
// ; used to end IIFE
(function chai(){
    //Named IIFE
    console.log('hello this is IIFE');
})();

( () => {
    console.log('hello this is IIFE TWO');
})();

( (name) => {
    console.log(`hello this is IIFE THREE ${name}`);
})("isra");