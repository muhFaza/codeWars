function knightVsKing(knightPosition, kingPosition) {
  
    let column = ['A','B','C','D','E','F','G','H'];
    
    knightPosition[1] = column.indexOf(knightPosition[1]) + 1;
    kingPosition[1] = column.indexOf(kingPosition[1]) + 1;
    
  //new code
    let delta = [];
        delta[0] = Math.abs(knightPosition[0] - kingPosition[0]);
        delta[1] = Math.abs(knightPosition[1] - kingPosition[1]);

    if (delta[0] <= 1 && delta[1] <= 1) return 'King'
    else if (delta[0] == 0 || delta[1] == 0) return 'None'
    else if (delta[0] <= 2 && delta[1] <= 1) return 'Knight'
    else if (delta[0] <= 1 && delta[1] <= 2) return 'Knight'
    else return 'None'

    // //first code
    // //king
    // if (kingPosition[0] == knightPosition[0] || 
    //     kingPosition[0] == (knightPosition[0] - 1) ||
    //     kingPosition [0] == (knightPosition[0] + 1))
    // {
    //   if(kingPosition[1] == knightPosition[1] || 
    //      kingPosition[1] == (knightPosition[1] - 1 )||
    //      kingPosition [1] ==( knightPosition[1] + 1)){
    //     return 'King'
    //   }
    // }
    
    // //knight
    // if ((knightPosition[0] - 2) == kingPosition[0] || 
    //     (knightPosition[0] + 2) == kingPosition[0])
    // {
    //   if ((knightPosition[1] - 1) == kingPosition[1] || 
    //       (knightPosition[1] + 1) == kingPosition[1]){
    //     return 'Knight'
    //   }
    // }
    // if ((knightPosition[0] - 1) == kingPosition[0] || 
    //     (knightPosition[0] + 1) == kingPosition[0])
    // {
    //   if ((knightPosition[1] - 2) == kingPosition[1] || 
    //       (knightPosition[1] + 2) == kingPosition[1]){
    //     return 'Knight'
    //   }
    // }
  }