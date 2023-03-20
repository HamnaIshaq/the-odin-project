import Building from "../building.png";

const Menu = () => {
  const element = document.createElement("div");

  const h1El = document.createElement("h1");
  h1El.textContent = "Menu";

  const imgEl = new Image();
  imgEl.src = Building;

  const pEl = document.createElement("p");
  pEl.textContent = "menu paragraph";

  element.appendChild(h1El);
  element.appendChild(imgEl);
  element.appendChild(pEl);

  return element;
};

export default Menu;
