
'use strict';

// SEARCH INSERT POSITION;
const search_Insert_position = function (arr, target) {
    // Initializing an empty array.
    arr = [];
    // Prompt the user to enter 6 array elements.
    for (let i = 0; i < target; i++) {
        const entry = Number(prompt("Enter the element to the array"));
        arr.push(entry);
    }
    // Check if the target exists in the array.
    if (arr.includes(target)) {
        console.log(arr.indexOf(target));
    } else {
        console.log("The target is not found");
    }
};

// Example usage

// search_Insert_position([], prompt("enter the target"));


/* You can assign variables from arrays like this:

const arr = [1, 2, 3, 4, 5, 6]
let a = arr[0]
let b = arr[1]

console.log(a) // outputs 1
console.log(b) // outputs 2
With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.

Notes
Check the Resources tab for examples.*/
const arr = [1, 2, 3, 4, 5, 6];
const [a, b] = arr;
console.log(a, b);

//Given two arguments, return an array which contains these two arguments.
const makePair = function (a, b) {
    console.log([a, b]);
}
makePair(1,2);
makePair(512124, 215)
makePair(51, 21)

//Write a function to reverse an array.

const reverseArray=function(arr){
    return arr.reverse();
}
const arrRev=reverseArray([1,2,3,4,5])
console.log(arrRev);
// SIMPLE ARRAY MANIPULATION.
function incrementItems(arr) {
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i] + 1
    }
    return arr;
}
console.log(incrementItems([0, 1, 2, 3, 4, 5, 6]));
// Return the Last Element in an Array
const LastELement = function (arr) {
    return arr[arr.length-1];
}
console.log(LastELement([12, 3, 4, 5, 6]));
// CONVERTING array to string.
const CONVERTING = function(arr) {
    return arr.map(function(currentValue) {
        return currentValue;
    }).join('');
}
console.log(CONVERTING([1,2,3,4,5]));
console.log(CONVERTING(['m', 'u', 'a', 'z']));

// CONCATINATING TWO INTEGER ARRAY
const Concatinating_array = function (arr_1, arr_2) {
    const arr3=arr_1.concat(arr_2)
    return arr_1.concat(arr_2);
}
console.log(Concatinating_array([1, 2, 3], [4, 5, 6]));
// Find Index of Array.
const Concatinating_array_1 = function (arr_1, arr_2) {
    const arr3=arr_1.concat(arr_2).findIndex(function (arr) {
        return arr === 3;
    });
    console.log(arr3);
    return arr_1.concat(arr_2);
}
Concatinating_array_1([1, 2, 3], [4, 5, 6])
