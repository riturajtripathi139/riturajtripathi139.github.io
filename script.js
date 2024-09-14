function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let btn = document.getElementById("btn");
let btntext = document.getElementById("btn-text");
let btnIcon = document.getElementById("btn-icon");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if(document.body.classList.contains("dark-theme")){
    btnIcon.src = "assets/light.svg";
    btntext.innerHTML = "Light";
  } else {(document.body.classList.contains("Light-theme")) 
    btnIcon.src = "assets/dark.svg";
    btntext.innerHTML = "Dark";
  }
    
});