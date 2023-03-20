import "./style.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";

const homeLink = document.querySelector(".tab-btn-home");
const menuLink = document.querySelector(".tab-btn-menu");
const aboutLink = document.querySelector(".tab-btn-about");

const mainContent = document.querySelector("#content");

mainContent.appendChild(Home());

homeLink.addEventListener("click", () => {
  mainContent.innerHTML = "";
  mainContent.appendChild(Home());
});
menuLink.addEventListener("click", () => {
  mainContent.innerHTML = "";
  mainContent.appendChild(Menu());
});
aboutLink.addEventListener("click", () => {
  mainContent.innerHTML = "";
  mainContent.appendChild(About());
});
