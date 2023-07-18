// This call Apply Bind

//this
// jab variable {} ke bahar hota hai to uska scope global hota hai, varna local hota hai
/*
console.log(this); //global scope -> window(this ki value)

function abcd() {
  console.log(this); // function scoped -> window
}

abcd();

// Difference b/w function and Method
// ek function jo object ke andar ho use hum method kahte hai

var obj = {
  name: "Vaibhav",
  baatKarona: function () {
    console.log(this); // method scoped -> obj
  },
};

obj.baatKarona();


// this in eventlistner DOM

var button = document.querySelector("button");
button.addEventListener("click", function () {
  this.style.color = "green";
  // console.log(this);
});
*/

// call apply bind -> agar tumhare paas koi function hai and koi object hai and tumhe function chalana hai and by default this ki value window hai, use window na rakh kar kisi object per point karwana hai

function abcd(val1, val2, val3, val4) {
  console.log(this, val1, val2, val3, val4); // by default this will be window
}

var obj = {
  name: "Rohan Singh",
  age: 24,
};

// abcd.call(obj) // here this will be obj
// abcd.call(obj, 5, 5, 6, 7); yeh ho gyi call ki baat 

// abcd.apply(obj, [15,25,23,25659884]) // apply call ki tarah hi hota hai per isme sirf 2 arugements hi bhejte hai hum
console.log("vaibahv ki barat");

// bind abcd ko obj ke sath bind kar deta hai, per instant call nhi karta
var bindedfunc = abcd.bind(obj);
bindedfunc();