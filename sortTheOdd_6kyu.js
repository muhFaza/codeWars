function sortArray(array) {
    let odd = [],
        savedIndex = [];

    for (let i = 0, j = 0; i < array.length; i++){
        if((array[i] % 2) !== 0 ){
            odd[j] = array[i];
            j++;
            array[i] = undefined;
        }
    }
    // cant use odd.sort()
    let verify = 0
    while (verify !== 1){
        verify = 1
        for (let i = 0; i < odd.length - 1; i++) {
            if (odd[i] > odd[i+1]){
                odd[odd.length] = odd[i];
                odd[i] = odd[i+1];
                odd[i+1] = odd[odd.length - 1];
                odd.length = odd.length - 1
                verify = 0
            }
        }
    }

    for(let i = 0, j = 0; i < array.length; i++){
        if(array[i] == undefined){
            array[i] = odd[j];
            j++;
        }
    }
    return array;
  }