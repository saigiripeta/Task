let menu = document.querySelector(".header .menu");
let navgation = document.querySelector(".header .main-navgation");
let links = document.querySelectorAll(".header .main-navgation a");
let overlay = document.querySelector(".overlay");

function openMobileNavgation() {
  menu.classList.add("open"); 
  navgation.classList.add("fade-in"); 
  controlOverlay("open"); 
}

function closeMobileNavgation() {
  menu.classList.remove("open"); 
  navgation.classList.remove("fade-in"); 
  controlOverlay("!open");
}

menu.addEventListener("click", () => {
  if (menu.classList.contains("open")) {
    closeMobileNavgation();
  } else {
    openMobileNavgation();
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileNavgation();
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024 && menu.classList.contains("open")) {
    
    closeMobileNavgation();
  }
});

function controlOverlay(status) {
  if (status == "open") {
    overlay.classList.add("fade-in");
    overlay.classList.remove("fade-out");
  } else {
    overlay.classList.add("fade-out");
    overlay.classList.remove("fade-in");
  }
}
