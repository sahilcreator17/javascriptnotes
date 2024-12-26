// Datatypes - 1. Primitive (Non reference) 2. Non Primitive (Reference)

/*
    1. Primitive Data types - 
        a. Number = 2^53
        b. String = set of charachters(spaces will be counted)
        c. Boolean = true or false(0/1)
        d. Bigint = greater 2^53
        e. Symbol = unique data type
*/

// 1. Number 

let a = 10
const b = 20

let c = a+b

// console.log(c);

// console.log(Number.isFinite(1/10)) // to check if the value is finite or not

// let abc = new Number(20)

// console.log(abc);

let d = 205

// console.log("Integer : ",Number.isInteger(d));

// console.log(Number.isNaN("Avinash"));



// 2. String

let firstName = "Avinaaaash"
let lastName = "Dubey"

let fullName = firstName + lastName // string concatination 

// console.log(fullName); // AvinashDubey


// console.log(typeof firstName); // typeof is used to determine the type of a variable

// console.log(firstName.length); // to determine the length of the string

// 0 1 2 3 4 5 6
// A v i n a s h

// console.log(firstName.charAt(3)); // to get the value from the string based on the position given

console.log(firstName.indexOf("a")); // to get the position of given charachter



// 3. Boolean

let isValid = false

// console.log(isValid);

// Note -- try to use is with the variable name like isValid , isPasswordCorrect for boolean value


