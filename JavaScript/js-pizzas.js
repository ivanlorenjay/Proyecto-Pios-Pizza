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
        Carrito = [];
    
    const pizzasSection = document.querySelector("#pizzas");
    
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
        pizzasSection.appendChild(Art);
        Carrito.push(Number(Value));
        P.querySelector("div+span").setAttribute(
            "data-price",
            `$${Carrito.reduce((VP, Total) => VP + Total, 0)}`
        );
        if (Carrito.length > 0) P.classList.add("Fill");
        else P.classList.remove("Fill");
        document.querySelector("#contador-productos").innerHTML = Carrito.length;
        });
    })