function likes(names) {
    let leng = names.length,
        str = 'like this';
    
    if (leng < 2){
      if(names.length == 0){
        return 'no one likes this'
      }
      return `${names[0]} likes this`
    }
    else if (leng == 2){
      return `${names[0]} and ${names[1]} ${str}`
    }
    else if (leng == 3){
      return `${names[0]}, ${names[1]} and ${names[2]} ${str}`
    }else{
      return `${names[0]}, ${names[1]} and ${leng-2} others ${str}`
    }
  }
  