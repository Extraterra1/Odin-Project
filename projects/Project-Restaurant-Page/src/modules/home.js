import Img1 from "../img1.jpg";
import Img2 from "../img2.jpg";
export default function Home() {
  const contentContainer = document.querySelector(".content");
  contentContainer.children[0].remove();
  const wrapper = document.createElement("div");
  wrapper.classList.add("home-wrapper");
  wrapper.innerHTML = `<h1>Welcome to the show</h1>
            <div class="side-content">
              <p>
                Step into a world of culinary delight at [Restaurant Name], where every visit promises a memorable dining experience. Our restaurant is dedicated
                to serving exquisite cuisine in a warm and inviting atmosphere. From our carefully crafted menus to our attentive staff, we aim to create the
                perfect setting for your next dining adventure. At [Restaurant Name], we take pride in our commitment to culinary excellence. Our talented chefs
                are passionate about creating dishes that tantalize your taste buds. Using only the finest and freshest ingredients, we offer a diverse menu that
                caters to all palates, from classic comfort foods to innovative, gourmet creations.
              </p>
              <p>
                At [Restaurant Name], we take pride in our commitment to culinary excellence. Our talented chefs are passionate about creating dishes that
                tantalize your taste buds. Using only the finest and freshest ingredients, we offer a diverse menu that caters to all palates, from classic
                comfort foods to innovative, gourmet creations.
              </p>
            </div>
            <img src="../src/img1.jpg" alt="" srcset="" />
            <img src="../src/img2.jpg" alt="" srcset="" />
            <div class="side-content">
              <p>
                Dining at [Restaurant Name] is not just about the food; it's an immersive experience for all your senses. Our thoughtfully designed interior,
                soothing ambiance, and carefully curated music selection create a harmonious atmosphere that complements the flavors on your plate.
              </p>
              <p>
                Whether you're a seafood enthusiast, a vegetarian, or a carnivore craving a juicy steak, our menu has something to satisfy every craving. We also
                offer a wide range of gluten-free, vegan, and allergy-friendly options, ensuring that everyone can enjoy a memorable meal.
              </p>
              <p>
                Enhance your dining experience with our handcrafted cocktails and an extensive wine list. Our expert mixologists take pride in concocting unique
                libations that perfectly complement your meal. From classic cocktails to our signature creations, you're in for a treat.
              </p>
            </div>`;
  wrapper.querySelector("img").src = Img1;
  wrapper.querySelectorAll("img")[1].src = Img2;

  contentContainer.appendChild(wrapper);
  return { page: "home", element: wrapper };
}
