function tribonacci(signature, n){
    if (n<3){
        n == 0 ? signature = [] : signature = signature.slice(n-n, n);
    }else{
    for(let i = 3; i < n; i++){
      signature.push(signature[i-1] + signature[i-2] + signature[i-3])
      }
    }
  return signature;
}