
function transX_right() {
    var reveals = document.querySelectorAll(".transX_right");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        var trx=-500+elementTop/2;
        reveals[i].style.transform = "translateX("+trx+"px)";
      }
    }
}

function transX_left() {
    var reveals = document.querySelectorAll(".transX_left");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        var trx=-300-elementTop/2;
        reveals[i].style.transform = "translateX("+trx+"px)";
      }
    }
}
  
  window.addEventListener("scroll", transX_right);
  window.addEventListener("scroll", transX_left);