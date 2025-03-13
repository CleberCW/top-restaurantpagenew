import img1 from "../src/imgs/1.jpeg";

export default function firstPage() {
  const container = document.querySelector("#content");
  const buttons = document.querySelectorAll(".button");
  const thisButton = document.querySelector("#home");
  buttons.forEach((button) => {
    button.className = "button";
  });
  thisButton.classList.add("toggled");

  function handleRendering() {
    container.classList.remove("right-animation-reverse");
    container.replaceChildren();

    const firstPage = document.createElement("div");
    firstPage.id = "firstPage";

    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    const hero = document.createElement("div");
    hero.className = "hero";

    const heroImg = document.createElement("div");
    heroImg.className = "hero-img";
    heroImg.classList.add("left-animation");
    const img = document.createElement("img");
    img.src = img1;
    heroImg.appendChild(img);

    const heroText = document.createElement("div");
    heroText.className = "hero-text";
    heroText.classList.add("right-animation");
    const h3 = document.createElement("h3");
    h3.textContent = "A new experience";
    const p = document.createElement("p");
    p.textContent =
      "Nestled in the heart of the city, Ember & Oak brings a bold fusion of modern flavors and timeless traditions. Our carefully curated menu showcases locally sourced ingredients, expertly crafted into unforgettable dishes. Whether you're here for an intimate dinner, a casual lunch, or a handcrafted cocktail at our vibrant bar, every bite tells a story of passion and quality.";
    heroText.appendChild(h3);
    heroText.appendChild(p);

    hero.appendChild(heroImg);
    hero.appendChild(heroText);

    const quote = document.createElement("div");
    quote.className = "quote";
    const blockquote = document.createElement("blockquote");
    blockquote.textContent =
      "A symphony of flavors orchestrated with precision—every dish at La Petite Flamme tells a story, and every bite is a chapter worth savoring. The chef doesn’t just cook; they compose. A meal here isn’t just dining—it’s an experience.";
    blockquote.classList.add("left-animation");
    const cite = document.createElement("cite");
    cite.textContent = "— Julian Devereaux, The Culinary Review";
    cite.classList.add("right-animation");
    quote.appendChild(blockquote);
    quote.appendChild(cite);

    const footerImg = document.createElement("div");
    footerImg.className = "footer-img";
    footerImg.classList.add("left-animation");

    wrapper.appendChild(hero);
    wrapper.appendChild(quote);
    wrapper.appendChild(footerImg);

    firstPage.appendChild(wrapper);

    container.appendChild(firstPage);

    buttons.forEach((button) => {
      button.disabled = false;
    });
  }

  if (container.firstChild) {
    if (container.firstChild.id != "firstPage") {
      buttons.forEach((button) => {
        button.disabled = true;
      });
      const container = document.querySelector("#content");
      container.classList.add("right-animation-reverse");

      container.addEventListener("animationend", handleRendering, {
        once: true,
      });
    }
  } else {
    handleRendering();
  }
}
