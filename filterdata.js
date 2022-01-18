// To filter Data greater thsn 6 letter
let arr = ["ishaq", "baig", "karthi", "topper karthik", "pk"];

let filtered = arr.filter((value, index) => {
  if (value.length > 5) {
    return value;
  }
});
console.log(filtered);
