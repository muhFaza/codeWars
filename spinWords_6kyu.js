function spinWords(string){
    let newArr = []
    for(x of string.split(' ')){
      if (x.length >= 5){
        x = x.split('').reverse().join('')
        newArr.push(x)
      }else newArr.push(x)
    }
    return newArr.join(' ')
  }