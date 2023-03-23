const Contact = () => {
  const content = `
  <h1 class="h1 menu-h1">Contact Us</h1>
  <div class="contact-us-main-container">
    <form class="contact-us-form">
      <div>
        <label for="name" class="d-block width">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          class="width form-input"
        />
      </div>

      <div>
        <label for="email" class="d-block width">Email</label>
        <input
          type="email"
          id="email"
          placeholder="johndoe@example.com"
          class="width form-input"
        />
      </div>

      <div>
        <label for="message" class="d-block width">Message</label>
        <textarea
          id="message"
          rows="5"
          class="width form-input"
          placeholder="Your message will go here..."
        ></textarea>
      </div>

      <div>
        <button type="submit" class="btn btn-secondary">Submit</button>
      </div>
    </form>

    <div>
    <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-96.94767236709595%2C33.01742621063262%2C-96.92758798599245%2C33.029426299824095&amp;layer=mapnik&amp;marker=33.023435649306045%2C-96.93763017654419" style="border: 1px solid black"></iframe><br/><small><a target="_blank" href="https://www.openstreetmap.org/?mlat=33.0234&amp;mlon=-96.9376#map=16/33.0234/-96.9376">View Larger Map</a></small>
    </div>
  </div>
  `;

  const element = document.createElement("div");
  element.classList.add("container");

  element.innerHTML = content;

  return element;
};

export default Contact;
