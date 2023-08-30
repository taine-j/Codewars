/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */


function high(x){
  
    // P : a string
    // R : the word of that string that contains the highest scoring amount of letters based on the position of the letter in the alphabet
    // E : ('man i need a taxi up to ubud'), 'taxi'
    // P : loop through each elements and calculate a score for each element, the push the element to a variable if it is the highest scoring element
    
    let array = x.split(' ');
    
    let highestWord = ''
    
    let outerCount = 0
    
    for(i=0; i<array.length; i++){
      
      let count = 0;
      
      array[i].split('').forEach(e=> {
        
        if (e === 'a'){
          count += 1
        } else if (e === 'b'){
          count += 2
        }else if (e === 'c'){
          count += 3
        }else if (e === 'd'){
          count += 4
        }else if (e === 'e'){
          count += 5
        }else if (e === 'f'){
          count += 6
        }else if (e === 'g'){
          count += 7
        }else if (e === 'h'){
          count += 8
        }else if (e === 'i'){
          count += 9
        }else if (e === 'j'){
          count += 10
        }else if (e === 'k'){
          count += 11
        }else if (e === 'l'){
          count += 12
        }else if (e === 'm'){
          count += 13
        }else if (e === 'n'){
          count += 14
        }else if (e === 'o'){
          count += 15
        }else if (e === 'p'){
          count += 16
        }else if (e === 'q'){
          count += 17
        }else if (e === 'r'){
          count += 18
        }else if (e === 's'){
          count += 19
        }else if (e === 't'){
          count += 20
        }else if (e === 'u'){
          count += 21
        }else if (e === 'v'){
          count += 22
        }else if (e === 'w'){
          count += 23
        }else if (e === 'x'){
          count += 24
        }else if (e === 'y'){
          count += 25
        }else if (e === 'z'){
          count += 26
        }
        
      })
      
      if (count > outerCount){
        outerCount = count
        highestWord = array[i] 
      }
      
    }
  
    return highestWord
    
  }