// Styles
import "./assets/styles/meyers-reset.css";
import "./assets/styles/style.css";

// Components
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

const root = document.querySelector("#root");
root.classList.add("top-container");

// HEADER NAVIGATION ITEMS
const navItems = [
  {
    name: "Home",
    active: true,
  },
  {
    name: "Menu",
    active: false,
  },
  {
    name: "Contact",
    active: false,
  },
];

/*
  FUNCTION TO CHANGE THE PAGE CONTENT
  DEPENDING UPON THE HEADER NAVIGATION SET ACTIVE 
  CHANGE THE CONTENT TO A NEW PAGE
*/
const ChangePageContent = () => {
  content.innerHTML = "";
  navItems.forEach((item) => {
    if (item.active === true) {
      const pageName = item.name;
      switch (pageName) {
        case "Home":
          content.appendChild(Home());
          break;
        case "Menu":
          content.appendChild(Menu());
          break;
        case "Contact":
          content.appendChild(Contact());
          break;
      }
    }
  });
  root.appendChild(content);
};

// ADD HEADER NAV TO ROOT WITH NAV ITEMS AND CALLBACK
root.appendChild(Header(navItems, ChangePageContent));

const content = document.createElement("div");
content.id = "content";

// SHOW HOME OF LOAD
content.appendChild(Home());

root.appendChild(content);
