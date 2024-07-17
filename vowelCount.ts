// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.



export class Kata {
  static getCount(str: string) {
    // extrapolates string into array and then uses filter method to filter the array by any character that is not a vowel
    return [...str].filter(char => 'aeiou'.includes(char)).length;
  }
}