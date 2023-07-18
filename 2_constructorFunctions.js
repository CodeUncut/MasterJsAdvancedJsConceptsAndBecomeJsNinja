//Constuctor function

// constructor ek sacha hai, aur us sache se nikalne wale biscuits instances hai
// a function which whenever invoked with "new" keyword, returns a blanck Object, if we use "this" inside that function, it returns an object with all of the properties and methods mentioned inside that function with this function, such function is called a constructor function

function BiscuitBananeKaSaancha() {
  this.color = "brown";
  this.width = 12;
  this.shape = "rectanngle";
  this.taste = "salty";
}

var bis1 = new BiscuitBananeKaSaancha();
var bis2 = new BiscuitBananeKaSaancha();
var bis3 = new BiscuitBananeKaSaancha();

/*
function CirularButton(color){
    this.radius = 2;
    this.color = color;
    this.icon = false;
    this.pressable = true;
}

var redbtn = new CirularButton("red");
var greenbtn = new CirularButton("green");*/
