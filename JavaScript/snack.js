const P = document.querySelector("#Pedidos");
const Snacks = document.querySelectorAll("#Snacks .product");

const Carrito = [];

Snacks.forEach((snack) => {
  const button = snack.querySelector("button");
  const priceSpan = snack.querySelector("span[data-Price]");

  button.addEventListener("click", () => {
    const price = parseInt(priceSpan.dataset.Price);
    const name = snack.querySelector("h3").textContent;

    const article = document.createElement("article");
    article.innerHTML = `<span>${name}</span><span>${price}</span>`;
    P.querySelector("div").appendChild(article);

    Carrito.push(price);

    P.querySelector("span[data-price]").dataset.price = `$${Carrito.reduce(
      (VP, Total) => VP + Total,
      0
    )}`;

    if (Carrito.length > 0) {
      P.classList.add("Fill");
    } else {
      P.classList.remove("Fill");
    }

    document.querySelector("#contador-productos").textContent = Carrito.length;
  });
});
