/* Given an array of integers, calculate the ratios of its elements that are positive, 
negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal. */

function plusMinus(arr) {
    
    let length = arr.length
    
    let neg = 0;
    
    let pos = 0;
    
    let zero = 0;
    
    arr.forEach(e => {
        if (e < 0){
            neg++
        } else if (e === 0){
            zero++
        } else {
            pos++
        }
    })
    
     return [pos/length, neg/length, zero/length].forEach(e=> console.log(e))

}