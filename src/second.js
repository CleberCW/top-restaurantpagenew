export default function secondPage() {
  const container = document.querySelector("#content");
  const buttons = document.querySelectorAll(".button");
  const thisButton = document.querySelector("#menu");
  buttons.forEach((button) => {
    button.className = "button";
  });
  thisButton.classList.add("toggled");

  function handleRendering() {
    container.classList.remove("right-animation-reverse");
    container.replaceChildren();

    const menuData = {
      title: "Menu",
      subtitle: "Finest Dining Experience",
      categories: [
        {
          name: "Appetizers",
          items: [
            { name: "Bruschetta", price: "$8.99" },
            { name: "Stuffed Mushrooms", price: "$10.99" },
          ],
        },
        {
          name: "Main Courses",
          items: [
            { name: "Grilled Salmon", price: "$18.99" },
            { name: "Filet Mignon", price: "$24.99" },
            { name: "Pasta Primavera", price: "$15.99" },
          ],
        },
        {
          name: "Desserts",
          items: [
            { name: "Chocolate Lava Cake", price: "$9.99" },
            { name: "Classic Cheesecake", price: "$7.99" },
          ],
        },
        {
          name: "Beverages",
          items: [
            { name: "Fresh Lemonade", price: "$4.99" },
            { name: "Espresso", price: "$3.99" },
          ],
        },
      ],
    };

    const menuDiv = document.createElement("div");
    menuDiv.id = "secondPage";
    menuDiv.classList.add("wrapper");

    const title = document.createElement("h2");
    title.textContent = menuData.title;
    title.classList.add("right-animation");
    menuDiv.appendChild(title);

    const subtitle = document.createElement("h4");
    subtitle.textContent = menuData.subtitle;
    subtitle.classList.add("left-animation");
    menuDiv.appendChild(subtitle);

    for (const [key, category] of menuData.categories.entries()) {
      const categoryDiv = document.createElement("div");
      categoryDiv.className = "category";
      categoryDiv.textContent = category.name;
      categoryDiv.classList.add("right-animation");

      menuDiv.appendChild(categoryDiv);

      category.items.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";

        const itemName = document.createElement("span");
        itemName.textContent = item.name;

        const itemPrice = document.createElement("span");
        itemPrice.className = "price";
        itemPrice.textContent = item.price;

        itemDiv.classList.add("left-animation");

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemPrice);
        menuDiv.appendChild(itemDiv);
      });
    }

    container.appendChild(menuDiv);

    buttons.forEach((button) => {
      button.disabled = false;
    });
  }
  // Remover o evento após a execução para evitar loops
  container.removeEventListener("animationend", handleRendering);

  if (container.firstChild) {
    if (container.firstChild.id != "secondPage") {
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
