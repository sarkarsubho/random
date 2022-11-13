function reveal() {
    var reveals = document.querySelectorAll(".reveal");
     var revealsp = document.querySelectorAll(".revealp");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
    console.log(windowHeight)
    
     for (var j = 0; j < revealsp.length; j++) {
      var windowHeight = window.innerHeight;
      var elementTop = revealsp[j].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        revealsp[j].classList.add("active");
      } else {
        revealsp[j].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  