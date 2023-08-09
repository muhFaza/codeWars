var countBits = function(n){
    let sum = []
    while(n != 0){
        if (n%2 == 1) sum.push(n % 2);
        n = Math.floor(n/2)
    }
    return sum.length
}