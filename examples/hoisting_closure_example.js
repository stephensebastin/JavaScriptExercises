// example scope 
var country = "India"; //global scope

function displayStateTN(){ // functional/local to the block/function scope
  
  let state="Tamilnadu";
  console.log("Country::"+country +" => State::"+state );
  
  function displayCity() {
    city = "chennai";
    var city; //hoisting
    //a variable can be declared after it has been used. 
    //till declaring it will be considered as global variable
  console.log("Country::"+country +" => State::"+state + "=> City ::"+city );
    
  }
//  console.log(city); //cannot be accessed
displayStateTN.displayCity= displayCity;
}

displayStateTN();
displayStateTN.displayCity();



console.log("Closure example");
//Closure
// create a function that activates the inner closure when we need.
//creating pain function for car, and it is called after payment is made
function car (paintColor) {
  return function paint() {
    console.log("Car color is :: " +paintColor+" now");
  }
}
console.log("Need to paint :: Color :: blue");
//gathering requirements 
let paintCar = car("blue");
//Getting cash
console.log("Blue color paint price is 5000 ");
paintCar(); //start painting



function hoistingExample() {
    pen = "Ink Pen";
  console.log("It is "+pen);
  
  var pen; //hoisting
  console.log("after decalring " + pen);
  
  
  price = 10;
  console.log("Updated Price ::"+price);
  var price=20;// after executing price =10 only price =20is executed
  
//defenitions will be hoised
  console.log("Old Price ::"+price);
}


hoistingExample();
