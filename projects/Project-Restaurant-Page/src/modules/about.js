export default function () {
  const contentContainer = document.querySelector(".content");
  contentContainer.children[0].remove();
  const wrapper = document.createElement("div");
  wrapper.classList.add("about-wrapper");
  wrapper.innerHTML = `<div class="hero">
            <h1>ABOUT US</h1>
          </div>
          <div class="story">
            <p>
              Once upon a time, in a quaint and picturesque village nestled deep within the rolling hills of Tuscany, there lived a man named Giovanni. Giovanni
              was a humble and kind-hearted soul, known throughout the village for his unwavering passion for cooking. He had a talent for creating the most
              exquisite dishes, each one a masterpiece of flavor and presentation.
            </p>

            <p>
              Giovanni's love for cooking was born from the deep-seated memories of his childhood. His parents, Maria and Antonio, had owned a small trattoria
              on the outskirts of the village, a place where locals and travelers alike would gather to savor the delectable flavors of homemade Italian
              cuisine.
            </p>

            <p>
              Maria was a culinary genius, a woman who could turn the simplest ingredients into gastronomic wonders that left patrons raving about her dishes
              for years to come. Antonio, her beloved husband, was the heart and soul of the trattoria, always ready with a warm smile and a friendly
              conversation for anyone who walked through their door.
            </p>

            <p>
              Life was idyllic for young Giovanni as he watched his parents work side by side, their love for each other and their craft evident in every dish
              they served. But tragedy struck one fateful evening when a powerful storm rolled through the village, unleashing torrents of rain and fierce
              winds.
            </p>

            <p>
              The trattoria, nestled on the banks of a gentle river, was inundated with water as the river overflowed its banks. Giovanni's parents, Maria and
              Antonio, were trapped inside. Desperate attempts were made by the villagers to save them, but the raging storm was unforgiving. In the end, they
              could only watch in helpless horror as the waters claimed the trattoria and its beloved owners.
            </p>

            <p>
              Giovanni was devastated by the loss of his parents and the trattoria. He was left with nothing but the precious memories of their culinary
              creations and the dreams they had shared together. Determined to honor their legacy, he vowed to rebuild their trattoria and share their recipes
              with the world.
            </p>

            <p>
              With the help of the villagers, Giovanni worked tirelessly to reconstruct the trattoria from the ground up. It took years of hard work and
              dedication, but eventually, the trattoria rose from the ashes, more beautiful than ever before. Giovanni adorned the walls with photographs of his
              parents and their creations, turning the trattoria into a living tribute to their memory.
            </p>

            <p>
              Giovanni's trattoria became famous far and wide, drawing food enthusiasts and travelers from across the globe. His dishes were a testament to his
              parents' culinary genius, and each bite was a taste of the love and passion that Maria and Antonio had poured into their craft.
            </p>

            <p>
              Yet, as Giovanni stood in his bustling trattoria, he couldn't help but feel the absence of his parents, especially during those quiet moments in
              the kitchen when he knew they should have been by his side. The tragic origins of his restaurant were a constant reminder of the price he had paid
              to preserve their legacy.
            </p>

            <p>
              And so, Giovanni's trattoria thrived, a place where the flavors of the past mingled with the present, and where the spirit of Maria and Antonio
              lived on through every dish served. But the sadness in Giovanni's eyes was a reminder that behind the delectable creations was a story of love,
              loss, and the undying determination to keep a culinary dream alive.
            </p>
          </div>`;
  contentContainer.appendChild(wrapper);
  return {
    page: "aboutUs",
    element: wrapper,
  };
}
