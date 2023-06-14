/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string */



function fakeBin(x){
    let array = x.split('')
    
     array.map((e,i)=> {
      if (e<5){
        array.splice(i, 1, 0)
      }else {array.splice(i,1,1)}
    })
      
      return array.join('')
    }
    