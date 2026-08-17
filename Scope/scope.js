var a = 1;
let b = 2;
const c = 3;

if(true) {
    var a = 10;
    let b = 20; //a variable declared in an inner block can have the same name as one in the outer scope , and are treated differently .
    const c = 30;

    console.log(a , b , c);
}
let b = 5;

console.log(a , b , c);