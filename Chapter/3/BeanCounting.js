function countBs(string) {
    let count = 0;
    for (let index = 0; index < string.length; index++) {
    if (string[index] == "B") {
        count++;
        }
    }
    {
  return count;
    } 
    }
  
  function countChar(string, char) {
    let count = 0;
    for (let index = 0; index <string.length; index++) {
      if (string[index] == char) {
        count++;
     }
   }
    {
    return count;
    }
  }