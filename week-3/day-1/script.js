function closeSplash() {
  document.querySelector("button").style.visibility = "hidden";
  document.querySelector("#splashPage").style.visibility = "hidden";
  document.querySelector("#tableOfContent").style.visibility = "visible";
}


// create array with 2 different types 
// create object with first, last name, favorite color  
// update favoriteColor 
// console.log second number from array with favorite color 
// example output: 500Royalblue

var array = [10, true];
var object = {
  firstName: "Dan",
  lastName: "Engel",
  favoriteColor: "Green"
}
object.color = "Purple"
console.log(array[1] + object.color)