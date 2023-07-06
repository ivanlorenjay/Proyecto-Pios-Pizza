const Sizes = [
  {
    S: 90,
    M: 110,
    L: 150,
    F: 170,
  },
];

const P = document.querySelector("#Pedidos"),
  Productos = document.querySelectorAll("#MainPizza>div>div>article"),
  Cart = JSON.parse(localStorage.getItem("cart")) || [];

Productos.forEach((Pro) => {
  Pro.querySelector("select").addEventListener("change", (e) => {
    Pro.querySelector("select+span").setAttribute(
      "data-Price",
      String(Sizes[Pro.getAttribute("id")][String(e.target.value)])
    );
  });
  Pro.querySelector("button").addEventListener("click", () => {
    const Value =
        Sizes[Pro.getAttribute("id")][
          String(Pro.querySelector("select").value)
        ],
      Name = Pro.querySelector(".NamePizza").innerHTML;
    const Art = document.createElement("article");
    Art.innerHTML = `<span>${Name}</span><span>${Value}</span>`;
    P.querySelector("div").appendChild(Art);
    Cart.push({ name: Name, price: Number(Value) });
    localStorage.setItem("cart", JSON.stringify(Cart));
    P.querySelector("div+span").setAttribute(
      "data-price",
      `$${Cart.reduce((VP, Total) => VP + Total.price, 0)}`
    );
    if (Cart.length > 0) P.classList.add("Fill");
    else P.classList.remove("Fill");
    document.querySelector("#contador-productos").innerHTML = Cart.length;
  });
});

// Retrieve the cart from local storage and display its contents
if (Cart.length > 0) {
  Cart.forEach((item) => {
    const Art = document.createElement("article");
    Art.innerHTML = `<span>${item.name}</span><span>${item.price}</span>`;
    P.querySelector("div").appendChild(Art);
  });
  P.querySelector("div+span").setAttribute(
    "data-price",
    `$${Cart.reduce((VP, Total) => VP + Total.price, 0)}`
  );
  P.classList.add("Fill");
  document.querySelector("#contador-productos").innerHTML = Cart.length;
}

const botonesAgregar = document.querySelectorAll('.btn-agregar');
botonesAgregar.forEach((boton) => {
  boton.addEventListener('click', () => {
    const nombre = boton.getAttribute('data-name');
    const precio = boton.getAttribute('data-price');
    const hamburguesa = { nombre, precio };
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(hamburguesa);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
  });
});

function actualizarCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const contador = document.querySelector('#contador-productos');
  const lista = document.querySelector('#Pedidos div');
  let total = 0;
  lista.innerHTML = '';
  carrito.forEach((hamburguesa) => {
    const nombre = hamburguesa.nombre;
    const precio = hamburguesa.precio;
    const item = document.createElement('article');
    item.innerHTML = `<span>${nombre}</span><span>$${precio}</span>`;
    lista.appendChild(item);
    total += parseInt(precio);
  });
  const totalElemento = document.querySelector('#Pedidos span');
  totalElemento.setAttribute('data-Price', `$${total}`);
  contador.innerHTML = carrito.length;
  if (carrito.length > 0) {
    document.querySelector('#Pedidos').classList.add('Fill');
  } else {
    document.querySelector('#Pedidos').classList.remove('Fill');
  }
}

window.addEventListener('load', () => {
  actualizarCarrito();
});