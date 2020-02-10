document.write("Colour toggle");

function changeColor(color) {
  document.body.style.background = color;
}

let toggleNavStatus = false; 

let toggleNav = function(){ 
    let getSidebar = document.querySelector(".dropDown");
    let getSidebarUl = document.querySelector(".dropDown ul");
    let getSidebarLinks = document.querySelectorAll(".dropDown a");
    }
​
if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    let arrayLength = getSidebarLinks.length; 
    for (let i=0; i <arrayLength; i++){
        getSidebarLinks[i].style.opacity ="1";
   }else {
    toggleNavStatus = true; } } 