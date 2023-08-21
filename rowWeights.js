/* Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2. */


function rowWeights(array){
  // P : an array of the weights of people 
  // R : an array where the first weight is the total of team one and second the total of team 2 
  // E : [80] ---> [80,0] 
  // P : extract each teams weights into serperate arrays and then sum and add to final array
  
  let teamOne = 0;
  let teamTwo = 0; 
  
  array.forEach((e,i)=> {
    if (i===0 || i % 2 === 0){
      teamOne += e;
    } else {
      teamTwo += e
    }
  })
  
  return [teamOne, teamTwo]
  
  
}