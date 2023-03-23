import CookiesCreamDonut from "../assets/images/cookies-and-creams-donut.jpg";
import PinkFrostedDonut from "../assets/images/pink-frosted-donut.jpg";
import ChocolateGlazedDonut from "../assets/images/chocolate-glazed-donut.jpg";

const Menu = () => {
  const content = `
    <h1 class="h1 menu-h1">Menu</h1>
    <div class="menu-container">
      <div class="menu-card">
        <div class="menu-img-container">
          <img
            src=${ChocolateGlazedDonut}
            alt="chocolate donut"
            width="100%"
            height="100%"
            class="menu-img"
          />
        </div>
        <div class="menu-item-desc">
          <h2 class="h2">Classic Chocolate Donut</h2>
          <p class="price">$5.99</p>
        </div>
      </div>
      <div class="menu-card">
        <div class="menu-img-container">
          <img
            src=${CookiesCreamDonut}
            alt="Cookies and creams donut"
            width="100%"
            height="100%"
            class="menu-img"
          />
        </div>
        <div class="menu-item-desc">
          <h2 class="h2">Cookies & Creams Donut</h2>
          <p class="price">$5.99</p>
        </div>
      </div>
      <div class="menu-card">
        <div class="menu-img-container">
          <img
            src=${PinkFrostedDonut}
            alt="Pink Frosted Donut with Rainbow Sprinkles"
            width="100%"
            height="100%"
            class="menu-img"
          />
        </div>
        <div class="menu-item-desc">
          <h2 class="h2">Pink Frosted Donut</h2>
          <p class="price">$5.99</p>
        </div>
      </div>
      <div class="menu-card">
        <div class="menu-img-container">
          <img
            src=${ChocolateGlazedDonut}
            alt="chocolate donut"
            width="100%"
            height="100%"
            class="menu-img"
          />
        </div>
        <div class="menu-item-desc">
          <h2 class="h2">Classic Chocolate Donut</h2>
          <p class="price">$5.99</p>
        </div>
      </div>
    </div>
  `;

  const element = document.createElement("div");
  element.classList.add("container");

  element.innerHTML = content;

  return element;
};

export default Menu;
