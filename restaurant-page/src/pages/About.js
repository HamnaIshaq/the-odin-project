import Building from "../building.png";

const About = () => {
  const element = document.createElement("div");

  const h1El = document.createElement("h1");
  h1El.textContent = "About";

  const imgEl = new Image();
  imgEl.src = Building;

  const pEl = document.createElement("p");
  pEl.textContent = "about paragraph";

  element.appendChild(h1El);
  element.appendChild(imgEl);
  element.appendChild(pEl);

  return element;
};

export default About;
