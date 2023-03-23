const Home = () => {
  const content = `
    <h1 class="h1">Go Nuts With Our Donuts!!</h1>
    <p class="hero-p">
      In donut shop, we want you to treat yourself with the best donuts
      available. Come and try our delicious chocolate and strawberry
      donuts!
    </p>
    <button type="button" class="btn btn-primary">Our Menu</button>
  `;

  const element = document.createElement("div");
  element.classList.add("hero-container");
  element.classList.add("container");

  element.innerHTML = content;

  return element;
};

export default Home;
