function isValidWalk(walk) {
  //insert brilliant code here
  const newObj = {
    n:0,s:0,w:0,e:0
  }

  for (const x of walk) {
    if ( !newObj[x] ) newObj[x] = 1
    else newObj[x]++
  }
  
  let verify = newObj.n == newObj.s && newObj.w == newObj.e


  if (walk.length == 10 && verify) return true
  else return false
}

console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));