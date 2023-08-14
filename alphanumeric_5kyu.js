function alphanumeric(string){
    if (!string) return false
    let allowed = 'qwertyuiopasdfghjklzxcvbnm1234567890'
    for (let i = 0; i < string.length; i++){
      let bool = false
      for (let j = 0; j < allowed.length; j++){
        if (string[i].toLowerCase() == allowed[j]){
          bool = true
          break;
        }
      }
      if (bool == false) return false
    }
    return true
  }