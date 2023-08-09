//return the total number of smiling faces in the array
function countSmileys(arr) {
    let ct = 0,
        eyes = [';',':'],
        nose = ['-','~'],
        mouth = [')','D'],
        verify = false;

        arr.map(emo => {
          if (eyes.indexOf(emo[0]) !== -1){
            if (emo.length === 2){
                mouth.indexOf(emo[1]) === -1 ? verify = false : verify = true
            }
            else if (emo.length === 3){
                nose.indexOf(emo[1]) === -1 ? verify = false : verify = true
                if (verify == true){
                    mouth.indexOf(emo[2]) === -1 ? verify = false : verify = true;
                }
            } 
          } if (emo.length > 3) verify = false;
          return verify == false ? verify = false : ct++;
        })
    return ct;
}