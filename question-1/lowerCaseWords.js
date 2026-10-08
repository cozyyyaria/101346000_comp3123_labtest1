const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
      if (!mixedArray || !Array.isArray(mixedArray)) {
        reject("Invalid input: Please provide an array.");
        return;
      }
  
      try {
        const stringArray = mixedArray
          .filter(item => typeof item === 'string')
          .map(word => word.toLowerCase());
        
        resolve(stringArray);
      } catch (error) {
        reject(error);
      }
    });
  };
  
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']; //
  
  lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));