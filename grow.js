/*
Given a non-empty array of integers, return the result 
of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

function grow(x){
  return x.length === 0 || x.every((e) => isNaN(e) ) ? "The Array is empty or not contain numbers" : x.reduce((a, b) => a * b)


  }

  console.log(grow([1, 2, 3])) //> 6
  console.log(grow([4, 1, 1, 1, 4])) //> 16
  console.log(grow([2, 2, 2, 2, 2, 2])) //> 64
  console.log(grow([])) //> "The Array is empty or not contain numbers"
  console.log(grow(["Arrey", "Do not", "contains", "numbers"])) //> "The Array is empty or not contain numbers"
