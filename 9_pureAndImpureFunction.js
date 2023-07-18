// Pure and Impure function

//Pure fn returns same input per same output de

//Yeh Pure function hai
var abcddf = 12; // global variable

function ans(a, b) {
  abcddf = 24; // agar hum global varaible ki value change karwate hai to yeh impure ho jata
  return a * b;
}
ans1 = ans(1, 2);
ans2 = ans(1, 2);

/*
Yeh Impure Function hai..

function randomValue(val){
    return Math.random()*val;
}
ans1 = randomValue(2);
ans2= randomValue(2);
console.log(ans1);
console.log(ans2);
*/
