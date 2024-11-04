/* Counting Bits

Given an integer n, determine the following:

How many 1-bits are in its binary representation?

The number n's binary representation has k significant bits indexed from 1 to k. What are the respective positions of each 1-bit in ascending order? 

For example, the diagram below depicts this information for the value n=37:

Binary Representation of 37

Binary: 1 0 0 1 0 1
Location: 1 2 3 4 5 6
In the binary representation of 37, there are three 1-bits located at the respective 1st, 4th, and 6th positions.

Note: The leftmost 1-bit is always position 1. Preceding zeros are not considered in determining the position.

Function Description Complete the function getOneBits in the editor below. The function must return a results array with the number of 1's stored at results[0], 
followed by the positions of all 1's in its binary representation in ascending order.

Example Input/Output

Input: 161
Output: [3, 1, 3, 8] (where 3 is the number of 1-bits, followed by their positions)
 */

function getOneBits(n){

    let binArray = n.toString(2).split('').map(Number);

    positionsArray = [];

    let position = 1; 

    binArray.forEach(e => {

        if (e === 1){

            positionsArray.push(position);

            position = position + 2;

        } else position = position + 2;

    })

    let fullArray = [positionsArray.length, ...positionsArray];

    return fullArray

}

console.log(getOneBits(10))





