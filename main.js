console.log("20 11 30 JS Arrays Lecture"); // check that files are linked

// NAME ARRAY ------------------------------
let nameArray = []; // declare empty array
nameArray.push("Autumn"); // add name using push method
console.log(nameArray); // output array

// reference array element by index position
// console.log(nameArray[0]);
console.log(`Name at index position 0 : ${nameArray[0]}`);

// prompt for name and add to array
let userName = prompt("Enter a name"); // prompt user
console.log(`You entered : ${userName}`); // output value from user
nameArray.push(userName); // add value to array
console.log(nameArray); // output updated array

// remove using pop
let removedEl = nameArray.pop(); // save removed value into variable
console.log(`You removed ${removedEl}`); // output removed variable
console.log(nameArray); // output updated array

// ANIMAL ARRAY ------------------------------
// define array with 6 elements
let animalArray = ["dog", "cat", "bird", "hamster", "fish", "turtle"];
console.log(animalArray); // output array

// console.log(animalArray.length);
console.log(`Animal array has ${animalArray.length} animals`); //output length of array

// output last element by index 
let finalIndex = animalArray.length - 1; // index position will always be one less than the length (0 based index)
console.log(`The last animal in animal array is ${animalArray[finalIndex]}`);

// output first element by index
console.log(`The first animal in animal array is ${animalArray[0]}`);

// prompt for position and output animal
let userIndex = parseInt(prompt("Enter an index position")); // prompt and convert type
if(userIndex < animalArray.length){ // if user value is less than length
    console.log(`The animal at index position ${userIndex} is ${animalArray[userIndex]}`);
} else { // if user value is equal to or greater than length
    console.log(`There are no animals at that index`);
}

// remove last element
animalArray.pop(); // pop does not accept any parameters
console.log(animalArray); // output updated array
console.log(`The last animal in animal array is ${animalArray[animalArray.length - 1]}`); // output final element in array by index position

// remove first element
animalArray.shift(); // shift does not accept and parameters
console.log(animalArray); // output updated array
console.log(`The first animal in animal array is ${animalArray[0]}`); // output first element in array by index position

// VEGETABLE ARRAY ------------------------------
let vegArray = ["cabbage", "turnip", "carrot", "cucumber", "potato"];
console.log(vegArray); // output array

// add element to beginning of array using unshift
vegArray.unshift("tomato"); 
console.log(`The first vegetable in vegetable array is ${vegArray[0]}`); // output first element in array by index position

console.log(vegArray); // output original array
console.log(`Index position 2 : ${vegArray[2]}`); // output original element at index position 2
vegArray[2] = "celery"; // update value of element at index position 2
console.log(vegArray);  // output updated array
console.log(`Index position 2 : ${vegArray[2]}`); // output updated element at index position 2

// look up index position of element
let userVeg = prompt("Enter a vegetable"); // prompt user
if(vegArray.indexOf(userVeg) >= 0){ // if index of returns a valid index
    console.log(`${userVeg} is at index position ${vegArray.indexOf(userVeg)}`);
} else { // if index of does not return a valid index
    console.log(`${userVeg} is not in our array`);
}

console.log(vegArray); // output original array
vegArray.splice(1, 3); // remove 3 elements starting at index position 1
console.log(vegArray); // output updated array