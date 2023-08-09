function moveZeros(arr) {
    //   let y = [...arr]
    //   while(y.indexOf(0) != -1){
    //     arr[arr.length] = 0;
    //     arr.splice(arr.indexOf(0), 1);
    //     y.splice(y.indexOf(0), 1);
    //   }
    //   return arr
      let total = 0, filtered = arr.filter(x => x !== 0 ? true : (total++, false))
      for(; total > 0; total--) filtered.push(0);
      return filtered
    }
    moveZeros([1,2,0,1,0,1,0,3,0,1])