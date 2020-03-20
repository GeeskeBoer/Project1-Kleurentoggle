document.write("Colour toggle");

function changeColor(color) {
  document.body.style.background = color;
  getSidebarUl.style.visibility = "hidden";
  function changeText() {
    textColor.textContent = "kleur";
  }
}

const toggleNavStatus = false;
const getSidebar = document.querySelector(".dropDown");
const getSidebarUl = document.querySelector(".dropDown ul");
const getSidebarLinks = document.querySelectorAll(".dropDown a");

const toggleNav = function() {
  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    let arrayLength = getSidebarLinks.length;
  }
};

// let toggleNoNav = function() {
//   getSidebarUl.style.visibility = "hidden";
// };
