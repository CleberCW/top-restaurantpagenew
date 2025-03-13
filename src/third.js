export default function thirdPage() {
  const container = document.querySelector("#content");
  const buttons = document.querySelectorAll(".button");
  const thisButton = document.querySelector("#loc");
  buttons.forEach((button) => {
    button.className = "button";
  });
  thisButton.classList.add("toggled");

  function handleRendering() {
    container.classList.remove("right-animation-reverse");
    container.replaceChildren();

    const locContainer = document.createElement("div");
    locContainer.id = "thirdPage";
    locContainer.classList.add("wrapper");
    locContainer.classList.add("loading");
    locContainer.classList.add("right-animation");

    const loc = document.createElement("iframe");
    loc.classList.add("loc");
    loc.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d764978.7513198333!2d2.9898942067527785!3d27.04322554379763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13883b64fb267151%3A0xd6406bdc582d7390!2sDeserto%20do%20Saara!5e0!3m2!1spt-BR!2sbr!4v1741875264269!5m2!1spt-BR!2sbr";

    locContainer.appendChild(loc);
    container.appendChild(locContainer);

    buttons.forEach((button) => {
      button.disabled = false;
    });
  }
  // Remover o evento após a execução para evitar loops
  container.removeEventListener("animationend", handleRendering);

  if (container.firstChild) {
    if (container.firstChild.id != "thirdPage") {
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
