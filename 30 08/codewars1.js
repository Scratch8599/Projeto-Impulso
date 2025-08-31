function findAverage(array) {
  if (array.length == 0) return 0
  return array.reduce((x,y) => x+y, 0)/array.length;
}

// var find_average = (array) => {  
//    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
// }