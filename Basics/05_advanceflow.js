// for-of loop only run on arrays and not on object

// snippet will show object becuase type of an array is object


// forof loop will never return anything

// const arr1 = [1,2,3,4,5]

// console.log(typeof arr1);


// for (const element of arr1) {
//     console.log(element);
       
// }


// for-in loop can run on array and object

// in object you have to write objectname[key] to display the values

// this will also not return anything

// let myObj = {
//     a: 10,
//     b: 20,
//     c: 30
// }

// let arr1 = [1,2,3,4,5]

// for (const key in arr1) {
//     console.log(arr1[key]);  
// }

// foreach loop

// callback function is actually an arrow function

// let arr1 = [1,2,3,4,5,6,7]

// arr1.forEach((i)=>{ console.log(i);
// })

// const newArr1 = arr1.forEach((i)=> console.log(i));
 // implicit return = means you do not have to use body {} if you are writing a single statement

 // explicit return = means you have to write return statement and use {} 

// console.log(newArr1); // undefined as forEach do not return anything


// map function will return a value

// map will only run on arrays

// let arr1 = [1,2,3,4,5]

// const newArr = arr1.map((i)=> { return i;})

// console.log(newArr);


// reduce function only run on arrays

// reduce will return a value

// reduce will add ev erything in the array and return a single value

// const array1 = [1, 2, 3, 4];

// const initialValue = 0; // index value
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
