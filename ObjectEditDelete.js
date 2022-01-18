let x = [
  {
    name: "Karthik",
    age: 22,
    place: "Bangalore",
  },
  {
    name: "Divya",
    age: 23,
    place: "Mysoor",
  },
  {
    name: "Gokul",
    age: 25,
    place: "Bangalore",
  },
];

x[0].salary = 25000;
console.log(x);

y = x.filter(function (value, index) {
  if (value.place == "Bangalore") {
    return value;
  }
});

console.log(y);
