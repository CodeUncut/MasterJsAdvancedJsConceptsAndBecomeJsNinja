// IIFE -> Immediatly invoked function expression

// IIFE hai function ko turant call karne ki kala, iss tarike se ki hum log ek private function bana paye

/*
(function(){

})()
*/

var ans = (function () {
  var privateval = 12; // private variable can't be accessed through console

  return {
    getter: function () {
      console.log(privateval); // getter is used to print the value
    },

    setter: function(val){
        privateval = val; //setter is used to set the value 
    }
  };
})();
