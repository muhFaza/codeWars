function generateHashtag (str) {
    let newStr = '#'
    for (let i = 0; i < str.length; i++){
        if ( i == 0 ){
            if ( str[i] != ' ' ) newStr += str[i].toUpperCase()
        }
        else {
            if ( str[i] != ' ' && str[i-1] == ' ' ){
                newStr += str[i].toUpperCase()
            }
            else if ( str[i] != ' ' && str[i-1] != ' ' ){
                newStr += str[i]
            }
        }
    }
    return newStr.length > 140 || newStr.length == 1 ? false : newStr
}