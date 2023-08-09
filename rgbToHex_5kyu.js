function rgb(r, g, b){
    let y = +r.toString() +(' ') +g.toString() +(' ') +b.toString(), 
        z = [],
        code = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

        y = y.split(' ')

    for(let i = 0, j = 0; i < y.length; i++, j+=2){
        if ((y[i] % 16) != 0){
            z[j+1] = y[i] % 16
        }else{
            z[j+1] = 0
        }
        z[j] = Math.floor(y[i] / 16)

        if(y[i] > 255){
            z[j+1] = 'F'
            z[j] = 'F'
        }
        if(y[i] < 0){
            z[j+1] = '0'
            z[j] = '0'
        }



        for(let k = 0; k < code.length; k++){
            if(z[j] == k+1){
                z[j] = code[k];
            }
            if(z[j+1] == k+1){
                z[j+1] = code[k];
            }
        }
    }
    return z.join('')
  }