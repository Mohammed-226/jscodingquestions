//  multiply the 2 to the even numbers in array
let arr = [10, 20, 22, 33];
let even = arr
  .filter(x => {
    if (x % 2 == 0) {
      return x;
    }
  })
  .map(x => x * 2);
console.log(even);

