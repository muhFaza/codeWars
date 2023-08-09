function findOutlier(integers){
    let newArr = integers.filter(x => {
      if (x % 2 == 0){
        return true
      }else{
        integers[integers.length] = x
        return false
      }
    });
    return newArr.length == 1 ? newArr[0] : integers[integers.length-1]
  }