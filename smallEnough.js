/* You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers. */

function smallEnough(a, limit){
  
    let count = 0;
    
    for (i=0;i<a.length;i++){
      if (a[i] <= limit){
        count += 1 
      } 
    }
    
    if (count === a.length){
      return true 
    } else return false
  
  
  }