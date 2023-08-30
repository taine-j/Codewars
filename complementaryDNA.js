/* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output) */


function DNAStrand(dna){
    // P : string that contains letters a t g or c 
    // R : the matching letters in a string 
    // E : ("AAAA"),"TTTT"
    // P : loop through the string and add the corrospoding letters to a new string 
    
    let matching = ''
    
    for(i=0; i<dna.length; i++){
      
      if (dna[i] === 'A'){
        matching += 'T'
      } else if (dna[i] === 'T'){
        matching += 'A'
    }else if (dna[i] === 'G'){
        matching += 'C'
  } else if (dna[i] === 'C'){
        matching += 'G'
    }
      }
    
    return matching
    }