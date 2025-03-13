import firstPage from "./first.js";
import secondPage from "./second.js";
import thirdPage from "./third.js";
import "./styles.css";

const buttons = document.querySelectorAll(".button");

document.addEventListener("DOMContentLoaded", () => {
  firstPage();
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "home") {
      firstPage();
    } else if (e.target.id == "menu") {
      secondPage();
    } else if (e.target.id === "loc") {
      thirdPage();
    }
  });
});
