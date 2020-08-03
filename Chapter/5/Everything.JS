function everyFor(array, test) {
  
    for (let number = 0; array.length > number; number++) {
      if (test(array[number])){
    
      }
      else 
      {
        return false 
      }
      
    }
    return true 
  }
  
  function every(array, test) {
   let chas = array.some(test)
   return chas
  }
  
  function everyChas(array, test) {
    let someResult = array.some((n) => !test(n))
   return !someResult
  }
  
  
  
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 12));
  // → false
  console.log(every([], n => n < 10));
  // → true