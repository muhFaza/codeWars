function ipToNum(ip) {
    let arr = ip.split('.').reverse(),res =0;
    for(let i = 0; i < arr.length; i++){
      res += arr[i] * 256**i;
    }return res
}

function numToIp(num) {
    let arr = [Math.floor(div(num, 3) %256),Math.floor(div(num, 2) %256),
        Math.floor(div(num, 1) %256),Math.floor(div(num, 0) %256),]
    function div(divide,x){
        for(let i=0; i<x; i++)divide = divide/256;
        return divide
    }
    return arr.join('.')
}