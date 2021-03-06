
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
        var trx=-350-elementTop/2;
        reveals[i].style.transform = "translateX("+trx+"px)";
      }
    }
}


window.addEventListener("scroll", function(){
  var itemrotate = document.querySelector(".rotate");
  itemrotate.style.transform = "rotate(" + (window.pageYOffset/50-50) + "deg)";
});

  
window.addEventListener("scroll", transX_right);
window.addEventListener("scroll", transX_left);


var questions = document.getElementsByClassName("questions_block");

for ( var i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.getElementsByClassName("answer")[0];
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


var navbtn = document.getElementsByClassName("nav_menu_button")[0];
var headernav = document.getElementsByClassName("header_nav")[0];

navbtn.addEventListener("click", function() {
  headernav.classList.toggle("active");
});
