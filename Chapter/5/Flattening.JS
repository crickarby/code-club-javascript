let arrays3 = [[1, 2, 3], [4, 5], [6], [7]];

function flatten(previousValue, currentValue) {
//  console.log(previousValue);
//  console.log(currentValue);
  return previousValue.concat(currentValue);
}

console.log(arrays3.reduce(flatten));
