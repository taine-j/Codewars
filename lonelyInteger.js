/* Given an array of integers, where all elements but one occur twice, find the unique element. */

function lonelyinteger(a) {
    
    let hashMap = new Map();
    
    a.forEach(e => {
        if (hashMap.has(e)){
            hashMap.set(e, hashMap.get(e) + 1)
        } else {
            hashMap.set(e, 1)
        }
    })
    
    for (let [key, value] of hashMap.entries()){
        
        if (value === 1){
            return key
        }
        
    }

}