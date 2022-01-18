//  filter the names having more than 5 characters
let x = ["karthik", "guru", "harshsa"];
let filter = x.filter(y => {
  if (y.length > 5) {
    return y;
  }
});
console.log(filter);


