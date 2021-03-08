var inner = document.getElementById("js-inner");

var distance = 0

function slideLeft() {
   if (distance > -256) {
      distance -= 128
      inner.style.setProperty('--location', 'translateX(' + distance + 'px)');
   }         
}

function slideRight() {
   
   if (distance < 0) {
      distance += 128;
      inner.style.setProperty('--location', 'translateX(' + distance + 'px)');
   }
}