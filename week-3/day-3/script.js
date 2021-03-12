


function calculate() {

   var output = document.getElementById("output");

   var billAmount = document.getElementById("billAmount").value;
   
   var newTotal = (Number(billAmount) * .15) + Number(billAmount);
   console.log(newTotal)
   output.innerText = newTotal
}

// capture value from input 
// store value
// calclulate new total
// display new total