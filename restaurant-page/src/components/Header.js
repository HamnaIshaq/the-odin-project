import Logo from "../assets/images/donut.png";

const Header = (navItems, ChangePageContent) => {
  const headerEl = document.createElement("header");
  headerEl.classList.add("header");
  headerEl.classList.add("container");

  const divEl = document.createElement("div");

  const logoImgEl = document.createElement("img");
  logoImgEl.src = Logo;
  logoImgEl.alt = "logo";
  logoImgEl.classList.add("logo");

  const logoTextSpanEl = document.createElement("span");
  logoTextSpanEl.classList.add("logo-text");
  logoTextSpanEl.textContent = "Donit";

  divEl.appendChild(logoImgEl);
  divEl.appendChild(logoTextSpanEl);

  const navEl = document.createElement("nav");
  navEl.classList.add("nav");

  const ulEl = document.createElement("ul");
  ulEl.classList.add("nav-list");

  const liHomeEl = document.createElement("li");
  liHomeEl.classList.add("nav-list-item");

  navItems.forEach((item) => {
    const buttonEl = document.createElement("button");
    buttonEl.type = "button";
    buttonEl.classList.add("btn");
    buttonEl.classList.add("tab-btn");
    buttonEl.setAttribute("data-name", item.name);

    item.active ? buttonEl.classList.add("active") : "";
    buttonEl.textContent = item.name;

    const liEl = document.createElement("li");
    liEl.classList.add("nav-list-item");

    liEl.appendChild(buttonEl);
    ulEl.appendChild(liEl);
  });

  // LISTEN TO CLICK INSIDE HEADER NAVIGATION
  ulEl.addEventListener("click", (e) =>
    ChangePage(e, navItems, ChangePageContent)
  );

  navEl.appendChild(ulEl);

  headerEl.appendChild(divEl);
  headerEl.appendChild(navEl);

  return headerEl;
};

/*
  SET ACTIVE TAB IN HEADER NAVIGATION 

  THIS FUNCTION LOGIC IS EXECUTED ONLY 
  WHEN BUTTONS WITH CLASS "tab-btn" ARE CLICKED
  WE STYLE THE ACTIVE TAB BUTTON
  SET THE ACTIVE KEY TO TRUE IN "navItems" ARRAY
  THEN CALL "ChangePageContent" CALLBACK FUNCTION   
*/
const ChangePage = (e, navItemsArr, ChangePageContent) => {
  if (e.target.classList.contains("tab-btn")) {
    const navItems = e.currentTarget.querySelectorAll(".tab-btn");

    SetActiveTabInDOM(e, navItems);
    NavItemsSetActive(e.target.getAttribute("data-name"), navItemsArr);
    ChangePageContent();
  }
};

/*
  SET ACTIVE STYLING TO TAB BUTTON IN DOM
  AND REMOVE ACTIVE STYLING FROM ALL OTHER 
  TAB BUTTONS
*/
const SetActiveTabInDOM = (activeTab, navItems) => {
  navItems.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });

  activeTab.target.classList.add("active");
};

/*
  SET THE ACTIVE PAGE IN "navItems" ARRAY 
*/
const NavItemsSetActive = (activeTab, navItems) => {
  navItems.forEach((item) => {
    item.name === activeTab ? (item.active = true) : (item.active = false);
  });
};

export default Header;
