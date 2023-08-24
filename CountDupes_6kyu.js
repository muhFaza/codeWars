function duplicateCount(text){
    const check = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const collect = [];

    for (let i = 0; i < check.length; i++) {
        collect[i] = 0
    }

    for(let i = 0; i < text.length; i++){//collect all
      let index = check.indexOf(text[i].toLowerCase())
      collect[index]++
    }
    
    let sum = 0
    for (const x of collect) {
        if (x > 1) sum++
    }
    return sum
}