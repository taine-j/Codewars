/* Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. */

function timeConversion(s) {
    
    if (s === '12:00:00AM'){ 
        return '00:00:00'
    }
    
    const string12 = s;
    
    const noAMPM = string12
  .split("")
  .filter(char => char >= '0' && char <= '9' || char === ':')
  .join("");
  
  if (!s.includes('A')){
      
    let number = Number(
  noAMPM.split(":")[0]) + 12;
  
  
    let final = noAMPM.split(":").map((e,i) =>(i === 0 ? number.toString() : e))
 .join(':')
  
  
  return final
  
      
  } else return noAMPM
  
  
  

}