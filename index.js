"use strict";

const menuIcon = document.querySelector(".menu-icon");
const whiteMenuWindow = document.querySelector(".white-menu-div");
const triangle = document.querySelector(".right-triangle");

menuIcon.addEventListener("click", () => {
  if (!whiteMenuWindow.classList.contains("notSelected")) {
    whiteMenuWindow.classList.add("notSelected");
    triangle.style.display = "none";
  } else {
    whiteMenuWindow.classList.remove("notSelected");
    triangle.style.display = "block";
  }
});
