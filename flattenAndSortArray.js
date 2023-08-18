/* Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:
 */

function flattenAndSort(array) {
  
    // P : an array with multiple arrays of numbers
    // R : an array of all the elements in the arrays in numerical order 
    // E : [[3, 2, 1], [7, 9, 8], [6, 4, 5]] ---> [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // P : run a for loop to target each array within the array and then take out each element of the array and put it in a new array, then sort given array
    
    let newArray = [];
    
    for(let i=0; i<array.length; i++){
      
      newArray.push(...array[i])
      
    }
    
   
    return newArray.sort((a,b)=> a - b)
    
  }