function permuteAPalindrome (input) { 
    let isEven,
        collect = [],
        count = [];
    input.length % 2 == 0 ? isEven = true : isEven = false
    
  
      for (let i = 0; i < input.length; i++){
        if (collect.indexOf(input[i]) == -1){
          collect.push(input[i]);
          count[collect.indexOf(input[i])] = 1
        }
        else if (collect.indexOf(input[i]) != -1){
          count[collect.indexOf(input[i])]++
        }
      }
    
    let even = 0,
        odd = 0;
    for (let i = 0; i < count.length; i++) {
        count[i] % 2 == 0 ? even++ : odd++
    }
    
    console.log(count,collect,even,odd)
    if (!isEven){
        return odd == 1 ? true : false
    } else {
        return odd == 0 ? true : false
    }
    
  }