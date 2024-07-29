// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.



// Function to encode vowels to numbers
export function encode(input: string): string {
    let encodedArr: string[] = [];
    
    [...input].forEach((e: string) => {
      if (e === 'a') {
        encodedArr.push('1');
      } else if (e === 'e') {
        encodedArr.push('2');
      } else if (e === 'i') {
        encodedArr.push('3');
      } else if (e === 'o') {
        encodedArr.push('4');
      } else if (e === 'u') {
        encodedArr.push('5');
      } else {
        encodedArr.push(e);
      }
    });
  
    return encodedArr.join('');
  }
  
  // Function to decode numbers back into vowels
  export function decode(input: string): string {
    let decodedArr: string[] = [];
    
    [...input].forEach((e: string) => {
      if (e === '1') {
        decodedArr.push('a');
      } else if (e === '2') {
        decodedArr.push('e');
      } else if (e === '3') {
        decodedArr.push('i');
      } else if (e === '4') {
        decodedArr.push('o');
      } else if (e === '5') {
        decodedArr.push('u');
      } else {
        decodedArr.push(e);
      }
    });
  
    return decodedArr.join('');
  }