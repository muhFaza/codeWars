function digitalRoot(n) {
    let arr = n.toString().split('')

    while (arr.length > 1) {
        for(let i = 1; arr[i] != undefined; i++){
            arr[0] = parseInt(arr[0]) + parseInt(arr[i]);
            arr.splice(i,1);
        }
        arr = arr.join('').toString().split('')
    }
    return parseInt(arr[0])}