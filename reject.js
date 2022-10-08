const Prime = n => {
    if (n===1){
    return false;
    }else if(n === 2){
       return true;
    }else{
       for(let x = 2; x < n; x++){
          if(n % x === 0){
             return false;
          }
       }
       return true;
    };
 };
 const filterPrime = numberArray => {
    const filtered = numberArray.filter(el => !Prime(el));
    return filtered;
 };
 console.log(filterPrime(numberArray));