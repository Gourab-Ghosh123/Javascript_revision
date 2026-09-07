// DATA TYPES(8)

//--------PRIMITIVE DATA TYPES(7 TYPES)-----

//THESE ARE IMMUTABLE => THEY CAN NEVER BE CHANGED ONLY REPLACED ARE

/* let str = "Hello";
str[0] = "J"; //  This won't change the string
console.log(str); // "Hello" (unchanged)
Here, "Hello" is immutable — you can only create a new string, not modify the existing one. */


//1. STRING

const firstName = "Gourab";
console.log(firstName);

const lastName = 'Ghosh';
console.log(lastName);

const message = `hello ${firstName}`;
console.log(message);

// string methods

const str = "Javascript is awesome!!";

console.log(str.length);

console.log(str.indexOf("is"));

console.log(str.includes("Java"));
console.log(str.slice(0, 10));
console.log(str.split(" "));
console.log(str.replace("awesome", "amazing"));

// 2. Number
const integer = 42;
const decimal = 3.14;
const negative = -10;
const scientific = 1.5e6;


// NUMBER METHODS
const num = 123.456;
console.log(num.toFixed(1)); // rounds to 2 decimal
console.log(num.toPrecision(4)); //4 significant digits
console.log(Number("42"));
console.log(parseInt("42.2@px")); //only parse integer values
console.log(parseFloat("3.14"));
console.log(isNaN(NaN));
console.log(isFinite(-Infinity)); // check if finite number

// 3. BOOLEAN CONVERSION
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean("hello"));
console.log(Boolean(42));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean("#@"));

// 4. Null⭐
const empty = null;
console.log(typeof empty); /* This is historical behavior in JavaScript.
and it cannot simply be changed because too much existing JavaScript code depends on it.*/

// 5. UNDEFINED

// 6. SYMBOL - UNIQUE IDENTIFIER
const sym1 = Symbol('id');
const sym2 = Symbol('id');
console.log(sym1 === sym2);

// 7. BIGINT


let stringgg = "js / is / amazing";
console.log(typeof (stringgg.split("/")));


//OBJECT TYPE(1)

/* Objects and arrays are mutable by default:
Javascript

Copy code
let arr = [1, 2, 3];
arr[0] = 99; // This changes the array
console.log(arr); // [99, 2, 3] */


const person = {
    Name: "Gourab",
    email: "gourab@gmail.com",
    adrress: {
        city: "Seoul",
        pin_code: 8123,
    },
    hobbies: ["eat", "sleep", "code", "repeat"],
    greet: function () {
        console.log("hello");
    }
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person.hobbies[2]);
person.phone = "123000002332884";
console.log(Object.entries(person));
delete person.phone;
console.log(Object.entries(person));
console.log(person.hasOwnProperty('name'));

//  ARRAYS ARE OBJECT!!!!

/* {}    → object
[]       → array (which is a kind of object)
null     → null, but typeof has historical quirk → "object" 


"Are arrays objects in JavaScript?"

Say:

"Yes. Arrays are special objects in JavaScript. They inherit object behavior but also have special features such as numeric indexes, the length property, and array methods like push, map, and filter."

"Then How do we check whether an object is an array?"

Say:

Array.isArray(value);
*/
const arr = [1, 2, 3, 4, 5];
console.log(typeof (arr));

const fruits = ["apple", "mango"];
fruits.myProperty = "banana";
console.log(fruits);
console.log(fruits.myProperty);
console.log(fruits[2]);
console.log(fruits[3]);


console.log([] + {});
console.log("Banana");


// TYPE COERCION -- JS AUTOMATICALLY CONVERTS DATA TYPE WHEN NEEDED

//STRING COERCION -- WHEN WE USE + WITH A STRING IT CONVERTS EVERYTHING INTO A STRING
console.log("Hello" + 42);
console.log(42 + "Hello");
console.log(2 + 5 +"5");
console.log("2" + 3);

// NUMBER COERCION -- WHEN WE USE -,*,/ WITH ANYTHING , IT CONVERTS INTO A NUMBER
console.log("5" - 2);
console.log("hello" - 42); //we cannot convert hello to a number

//BOOLEAN COERCION

// falsy values - false, 0, "", null, undefined, NaN, 0n, -0
// EVERYTHING ELSE IS TRUTHY!

console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("Hello")); // true


console.log([] + {}); // [object Object]
console.log({} + []); // [object Object]
console.log([] + []);

console.log(String([]));



/* TRICKY INTERVIEW QUESTION
[] == ![]
[] == !true
[] == false
String([]) == false
"" == false
Boolean("") == false
false == false
*/

console.log([] == ![]); //true

if("0") {
    console.log("True because not an empty string");
}

if(0) {
    console.log("It won't run becows its false in Boolean");
}

// == vs === vs Object.is()

console.log(0 == false); //true
console.log(0 === false); //false

console.log("" == false); //true
console.log("" === false); //false

console.log(null == undefined); //true (null and undefined both gives false when converted to Boolean)
console.log(null === undefined); //false

console.log(NaN == NaN); //false (Nan can never be equal to anything , even with itself)
console.log(Object.is(NaN , NaN)); //true (Object.is() also doesn't perform type coercion and is mostly like ===, but it differs for two special cases: Object.is(NaN, NaN) is true, while NaN === NaN is false; and Object.is(+0, -0) is false, while +0 === -0 is true.)

console.log(0 === -0) //true
console.log(Object.is(0 , -0)); //false
