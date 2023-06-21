

//Dark Theme scripts
var sun_moon = document.getElementById("sun_moon");
    sun_moon.onclick = function () {
      document.body.classList.toggle("dark-theme");
      if(
        document.body.classList.contains("dark-theme")) {
          sun_moon.src = "img/sun.png";
      } else {
          sun_moon.src = "img/moon.png";
        }
    }

// Require the sideNav Action
    var menuBtn = document.getElementById("menuBtn");
    var sideNav = document.getElementById("sideNav");
    sideNav.style.right = "-250px";
    menuBtn.onclick = function () {
      if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
      }
      else {
        sideNav.style.right = "-250px";
      }
    }

