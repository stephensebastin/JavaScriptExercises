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

const students = [{"name":"Kumar","credits":"10"},{"name":"Krish","credits":"9"},{"name":"Tim","credits":"6"},{"name":"Steve","credits":"8"}];
function higherOrderFunctionExampleWithArray(studentsList) {
//higher order fucntions

var firstClassStudents = studentsList.filter(function(student) {
  return (student.credits >=8)? true:false;
});

console.log(firstClassStudents);

}

higherOrderFunctionExampleWithArray(students);



// function showName(name){
//   return `Hi!! ${name} `;
// }

// function conveyMessage(show,message,name){
//      console.log(`${showName(name)} ${message}`);
// }

// conveyMessage(showName,'Welcome onboard.. ','Jacob');
// conveyMessage(showName,'Start exploring the office','Jacob');


//Higher order function
function higherOrderFunctionExample() {

var convey =  function(name){
  return function(msg){
      console.log(`Hi!! ${name}, ${msg}`);
  }
}

let conveyMessage = convey('Jacob');
conveyMessage("Welcome onboard...")
conveyMessage('Start exploring the office','Jacob');

}
higherOrderFunctionExample();