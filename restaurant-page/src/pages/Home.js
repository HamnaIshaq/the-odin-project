import Building from "../building.png";

const Home = () => {
  const element = document.createElement("div");

  const h1El = document.createElement("h1");
  h1El.textContent = "Simple Restaurant";

  const imgEl = new Image();
  imgEl.src = Building;

  const pEl = document.createElement("p");
  pEl.textContent = "Taste the authentic Saudi cuisine";

  element.appendChild(h1El);
  element.appendChild(imgEl);
  element.appendChild(pEl);

  return element;
};

export default Home;
