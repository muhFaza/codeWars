snail = function(array) {
    if(array[0] == false) return []
          let result = [],
         row = 0,
            col = 0,
            limit = array.length-1;
      
      while(true){
        //top
        for(let i = row, j = col; j <= limit; j++){
          result.push(array[i][j]);
        }
        row++;
        if(limit == col) return result
  
        //right
        for(let i = row, j = limit; i <= limit; i++){
          result.push(array[i][j])
        }
  
        //bottom
          if(limit < Math.floor(array.length/2)) return result;
        let reverse = array[limit].reverse()
        console.log(reverse)
        for(let i = row; i <= limit; i++){
          result.push(reverse[i]);
        }
        reverse = [];
        limit--;
  
        //left
        for(let i = limit, j = col; i >= row; i--){
          result.push(array[i][j]);
        }
        col++;
      }
    }