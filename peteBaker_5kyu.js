function cakes(recipe, available) {
    const arr = []
    
    for (let ing in recipe){
        if (available[ing] == undefined) return 'false'
        arr.push(Math.floor(available[ing] / recipe[ing]))
    }

    let min = Infinity
    for (const x of arr) {
        if (x < min) min = x
    }
    return min
  }

let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
// recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
// available = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipe, available))