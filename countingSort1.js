/* Given a list of integers, count and return the number of times each value appears as an array of integers. */

function countingSort(arr) {
    
    /* P: Array of integers
       R: Frequency array, 1 is added to the index on the frequenccy array that equals the num on the array of integers
       E: [5,1,2,6] -> [0,1,1,0,0,1,1] 
       P:*/
       
       
       let frequencyArray = [];
       
       for (let i=1;i<=100;i++){
           frequencyArray.push(0)
       }
       
       
    
       arr.forEach((e,i) => {
           frequencyArray[e]++
       }) 
       
     return frequencyArray

}