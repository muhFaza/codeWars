function findOdd(A) {
    let nonDupe = [],
        occurance = 0;
    for(x of A){
      if(nonDupe.indexOf(x) == -1) nonDupe.push(x)
    }
    for(let i = 0; i < nonDupe.length; i++){
      for(let j = 0; j < A.length; j++){
        if (A[j] == nonDupe[i]) occurance++;
      }
      if (occurance % 2 != 0){
        return nonDupe[i]
      } else occurance = 0;
    }
    return 0;
  }