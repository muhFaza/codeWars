function alphabetPosition(text) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    let str = ''
    for (let char of text) {
        char = char.toLowerCase()
        for (let i = 0; i < alphabet.length; i++) {
            if (char == alphabet[i]) str += `${i+1} `
        }
    }
    text = ''
    for (let i = 0; i < str.length-1; i++) {
        text += str[i]
    }
    return text
  }