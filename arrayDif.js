/* DESCRIPTION:
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3] */



function arrayDiff(a, b) {
  // PREP
  // (P)arameters - takes in 2 arrays
  // (R)eturn - returns an array a without
  // anything in array b
  // (E)xamples - 
  //  ([1, 2], [1]) => [2]
  // ([1, 2, 2], [2]) => [1]
  // (P)seudocode - 
  // Create new array
  let newArr = []
  // Loop through array a
  for (let i = 0; i < a.length; i++) {
    // Only push elements from a that
    // aren't in b
    if (!b.includes(a[i])) {
      newArr.push(a[i])
    }
  }
  return newArr
}