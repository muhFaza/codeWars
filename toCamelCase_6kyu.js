function toCamelCase(str){
    let hasil = "";
    for (i = 0; i < str.length; i++){
      if(str[i] == "_" || str[i] == "-"){
        hasil += str[i+1].toUpperCase();
        i++;
      }else{
        hasil += str[i];
      }
    }
    return hasil;
  }