// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]


export const getEvenNumbers = (numbersArray : number[]) : number[] => {
    return numbersArray.filter(e=> e % 2 === 0)
  }