import "./assets/styles/meyers-reset.css";
import "./assets/styles/style.css";

import Logo from "./assets/images/donut.png";

import AddClass from "./util-ftn/AddClass";
import RemoveClass from "./util-ftn/RemoveClass";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

const root = document.querySelector("#root");

const logoImg = root.querySelector(".logo");
logoImg.src = Logo;

const homeLink = root.querySelector(".tab-btn-home");
const menuLink = root.querySelector(".tab-btn-menu");
const contactLink = root.querySelector(".tab-btn-contact");

const mainContent = root.querySelector("#content");

mainContent.appendChild(Home());
AddClass(homeLink, "active");

homeLink.addEventListener("click", () => {
  mainContent.innerHTML = "";
  mainContent.appendChild(Home());

  AddClass(homeLink, "active");
  RemoveClass(menuLink, "active");
  RemoveClass(contactLink, "active");
});
menuLink.addEventListener("click", () => {
  mainContent.innerHTML = "";
  mainContent.appendChild(Menu());

  AddClass(menuLink, "active");
  RemoveClass(homeLink, "active");
  RemoveClass(contactLink, "active");
});
contactLink.addEventListener("click", () => {
  mainContent.innerHTML = "";
  mainContent.appendChild(Contact());

  AddClass(contactLink, "active");
  RemoveClass(homeLink, "active");
  RemoveClass(menuLink, "active");
});
