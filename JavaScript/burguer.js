const P = document.querySelector("#Pedidos");
        const Hamburguesas = document.querySelectorAll(".Hamburguesa .product-container");
        const Carrito = [];
        
        Hamburguesas.forEach((Hamburguesa) => {
          const button = Hamburguesa.querySelector("button");
          const priceSpan = Hamburguesa.querySelector("span[data-Price]");
        
          button.addEventListener("click", () => {
            const price = parseInt(priceSpan.getAttribute("data-Price"));
            const name = Hamburguesa.querySelector("h3").innerHTML;
        
            const Art = document.createElement("article");
            Art.innerHTML = `<span>${name}</span><span>${price}</span>`;
            P.querySelector("div").appendChild(Art);
        
            Carrito.push(price);
        
            P.querySelector("div + span").setAttribute(
              "data-price",
              `$${Carrito.reduce((VP, Total) => VP + Total, 0)}`
            );
        
            if (Carrito.length > 0) {
              P.classList.add("Fill");
            } else {
              P.classList.remove("Fill");
            }
        
            document.querySelector("#contador-productos").innerHTML = Carrito.length;
          });
        });