
// Non Primitive Data type 

/*
    1. Array
    2. Object
    3. Function
*/

//1. Array = a collection of multiple data and datatypes

// let arr1 = [1, 2, 3, 4, "Sam", "Atul", true]

// console.log(arr1);

// console.log(arr1[1]);


// similarity between string and array
// let firstName = "Avinash"
// console.log(firstName[2]);

// let arr2 = arr1

// console.log(arr2);

// arr2 = [1,2,3,4]

// console.log(arr2);
// console.log(arr1);


// let arr3 = [1,2,3,[1,2,[5,6,7]]]

//  console.log(arr3[3][2][0]);
//  console.log(arr3.flat(Infinity));

let arr1 = [1,2,3,4,5]

arr1.push(32) // add a new value at the end

// console.log(arr1);

arr1.pop() // remove from the end

// console.log(arr1);

arr1.unshift(78) // add the value at the start of the array

// console.log(arr1);

arr1.shift()  // remove from the start

// console.log(arr1);

let arr2 = [1,2,[3,4,5,[7,8,9],[4,5,6,7,[4,5,6]]]]

// console.log(arr2.flat(Infinity));

const array1 = [5,6, 12, 8, 130, 44];

// console.log(typeof array1);

const found = array1.find((element) => element > 10);

// console.log(found);


// 2. Object = key value pair of multiple elements

// let myObj = {
//     1 : 10,
//     b: 20,
//     c: "Avinash",
//     "first name" : true
// }

// myObj["1"] = 44

// console.log(myObj);


const myObj = {
    1 : 10,
    b: 20,
    c: "Avinash",
    "first name" : true
}

// Object.freeze(myObj) // This will stop any changes in the given object


// myObj.b = 56

// console.log(Object.isFrozen(myObj));



// console.log(typeof myObj);

// console.log(myObj.a); // to get the value of given key

// console.log(Object.values(myObj));

// console.log(typeof myObj["first name"]);

// 1 = "1" Type of the key in any object will always be a string no matter what the value is

// console.log(Object.keys(myObj)); // this will prove that all the keys are of string type

// number , Number
// String, String
// Boolean, Boolean

// const a = new Number(22)

// console.log(a);

// 3. function = this is to write a block of code that can be used multiple times

// function Sum(a, b) {
//     let c = a+b;
//     console.log(c);  
// }

// Sum(3,4)
// Sum(4,9)

// Function will have 2 parts -- 1. Body or definition 2. Call

