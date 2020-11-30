# 20 11 30 JS Arrays Lecture

## Set Up
1. Create an html file with an `h1` rendering the assignment title
1. Create a JS file 
1. Link the JS file before the closing `body` tag using the `script` tag
1. Open the HTML file in the browser
1. Print the assignment title in the browser from the JS file to be sure that files are linked correctly

## Name Array
1. Declare a variable called `nameArray` as an empty array
1. Add your name to the end of the array using the push method
1. Output the name array to the console
1. Output the first element in the name array by index position to the console
1. Output the first element in the formatted message : "Name at index position 0 : [FIRST_ELEMENT]"
1. Prompt the user for a name to add to the name array then add it to the end of the array using the push method. Output the name added from the prompt and the name array
1. Remove the last element from the name array using the pop method. Output the name removed and the name array.

## Animal Array
1. Declare a variable called `animalArray` with the following elements : "dog", "cat", "bird", "hamster", "fish", "turtle"
1. Return the number of elements in the array using the length property. Output the number of elements in the formatted message : "Animal array has [NUMBER_OF_ELEMENTS] animals"
1. Return the last element in the animal array using the length and index position. Output the last element in the formatted message : "The last animal in animal array is [LAST_ANIMAL]"
1. Return the first element in the animal array using index position. Output the first element in the formatted message : "The first animal in animal array is [FIRST_ANIMAL]"
1. Prompt the user for an index position and output the animal at that index position in the formatted message : "The animal at index position [USER_INDEX_POSITION] is [ANIMAL_AT_POSITION]". If the user enters an out of range index position output the message : "There are no animals at that index".
1. Remove the last element in the animal array using the pop method. 
1. Remove thr first element in the animal array using the shift method.

## Vegetable Array
1. Declare a variable called `vegetableArray` with the following elements : "cabbage", "turnip", "carrot", "cucumber", "potato"
1. Add an item to the beginning of the array using the unshift method then return the first element using index position. Output the new first element in the formatted message : "The first vegetable in vegetable array is [FIRST_ELEMENT]".
1. Redefine the element at index position 2 to a vegetable not included in the array.
1. Prompt the user to enter a vegetable. Return the index position of that vegetable using the indexOf method and output the position in the formatted message : "[VEGETABLE_ENTERED] is at index position [VEGETABLE_POSITION]". If an out of range index position is return output the message "[VEGETABLE_ENTERED] is not in our array"
1. Remove 3 elements from the vegetable array starting at index position 1 using the splice method. 
