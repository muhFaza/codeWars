function persistence(num) {
    let index = 0
    while (num/10 >= 1) {
        let str = num + ''
        num = 1
        for (const x of str) {
            num *= +x
        }
        index++
    }
    return index
}