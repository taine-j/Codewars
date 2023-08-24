/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

 */


function getMiddle(s){
  
    let string = ''
    let evenLow = Math.floor((s.length-1)/2)
    let evenHigh = Math.ceil((s.length-1)/2)
    let odd = (s.length-1)/2
    
    if (s.length % 2 === 0){
      
      string += `${s[evenLow]} ${s[evenHigh]}`
      
      
      return string.split(' ').join('')
      
      //console.log(evenHigh)
      
   } else {
      
     string += `${s[odd]}`
     return string 
      
    }
     
  
    
  }