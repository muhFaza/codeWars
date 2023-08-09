function pigIt(str){
    str = str.split(' ')
    let newStr = [], i=0;
    for (x of str){
      if(x !== '!' && x !== '?'){
      x = x + x[0]
      newStr[i] = x.slice(1).concat('ay')
      }else newStr[i] = x
      i++
    }
    return newStr.join(' ')
  }