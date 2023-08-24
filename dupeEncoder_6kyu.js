function duplicateEncode(word){
    const alphabet = {}
    for (let char of word) {
        char = char.toLowerCase()
        if (!alphabet[char]) {
            alphabet[char] = 1
        } else {
            alphabet[char]++
        }
    }

    str = ''
    for (let char of word) {
        char = char.toLowerCase()
        if (alphabet[char] > 1){
            str += ')'
        }
        else str += '('
    }

    return str
}

console.log(duplicateEncode("Success"))