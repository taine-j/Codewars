/* The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

 */

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  
    // P : an array of numbers 
    // R : an array that contains the 2 highest numbers from the parameter, secondOldest, oldest 
    // E : 1,2,3,4 --> 3,4     
    // P : sort the array from lowest to highest and then add the last 2 numbers to a new array
    
    let lowToHigh = ages.sort((a,b)=> a-b)
    
    let twoOldest = [lowToHigh[lowToHigh.length-2], lowToHigh[lowToHigh.length-1] ]
  
    return twoOldest
    
  }