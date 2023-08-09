function bump(x){
    let arr = x.split(''),
        bumps = 0;
    for (x of arr) x == 'n' ? bumps++ : bumps;
    return bumps > 15 ? 'Car Dead' : 'Woohoo!';
  }