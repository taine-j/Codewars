/* Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'. */

function maskify(cc) {
  
    let masked = cc.split('') 
      
      masked.map((e, i)=> {
        if (i !== masked.length-1 && i !== masked.length -2 && i !== masked.length-3 && i !== masked.length-4 ){
           masked.splice(i,1,'#')
        }
      })
      
      return masked.join('')
    
    }