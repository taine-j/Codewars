/* Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26. */


function sumOfMinimums(arr) { 
    // P : an array containing a number of other arrays containing numbers
    // R : the sum of the minimum value of each array 
    // E : [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]] ---> 9
    // P : loop through the arrays and sort them and then extract the first element to a variable and add values
    
    let count = 0;
    
    for(i=0;i<arr.length;i++){
      
      arr[i].sort((a,b)=> a-b)
      
      count += arr[i][0]
      
      
    }
    
    return count
} 