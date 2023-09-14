export default function () {
  const contentContainer = document.querySelector(".content");
  contentContainer.children[0].remove();
  const wrapper = document.createElement("div");
  wrapper.classList.add("contact-wrapper");
  wrapper.innerHTML = `<div class="hero">
            <h1>CONTACT US</h1>
          </div>
          <form>
            <div class="input-group">
              <label for="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div class="input-group">
              <label for="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div class="input-group">
              <label for="message">Your Message</label>
              <textarea name="" id="message" cols="50" rows="10"></textarea>
            </div>
            <div class="input-group">
              <button>Submit</button>
            </div>
          </form>`;
  contentContainer.appendChild(wrapper);
  return {
    page: "contact",
    element: wrapper,
  };
}
