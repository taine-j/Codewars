/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */

function isPangram(string){
    // split into a array of single letters
    // sort into alphabetical order
    // compare to string that is the whole abc's 
    
    let comparison = 'abcdefghijklmnopqrstuvwxyz'
    
    let sorted = string.split('').filter(e => e !== ' ').filter(e => e !== '.').sort((a, b) => a.localeCompare(b)).join('').toLowerCase().split('')
    
    let singleLetters = []
    
     sorted.map(e => {
       
       if (singleLetters.includes(e, 0) == false){
           singleLetters.push(e)
           }
      })
    
   let final = singleLetters.join('').toLowerCase() 
  
    
     if ( final === comparison){
    return true
    } else return false 
    
    }
    
   