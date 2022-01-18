let x = prompt("Enter the range");

let num = 0;
finalNum = 0;
temp = x;
total = 0;

for (let i = 1; i < x; i++){
    while (x > 1) {
        rem = temp % 10;
        total = rem ** x;
        finalNum +=total
    }
    if (finalNum === x) {
      console.log("it is a ArmStrong Number");
    } else {
      console.log("It is Not a ArmStrong Number");
    }
}
