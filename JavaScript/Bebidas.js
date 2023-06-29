
const P = document.querySelector("#Pedidos")
Carrito = [];
document.querySelectorAll("main>div>article").forEach((Bebida) => {
    const TipoBebida = Bebida.querySelector("div>div:first-child").getAttribute("data-name")
    Bebida.querySelectorAll("input").forEach((Sabor) => {
        const ID = Sabor.getAttribute("id")
        Sabor.addEventListener("change", () => {
            const SaborN = Sabor.parentElement.querySelector(`input[id="${ID}"]+label>buttoncustom`).innerHTML,
                Precio = Sabor.parentElement.querySelector(`input[id="${ID}"]+label+span`).innerHTML;
            const Art = document.createElement("article");
            Art.innerHTML = `<span>${SaborN}</span><span>${Precio}</span>`;
            P.querySelector("div").appendChild(Art);
            Carrito.push(Number(Precio));
            P.querySelector("div+span").setAttribute(
                "data-price",
                `$${Carrito.reduce((VP, Total) => VP + Total, 0)}`
            );
            if (Carrito.length > 0) P.classList.add("Fill");
            else P.classList.remove("Fill");
            document.querySelector("#contador-productos").innerHTML = Carrito.length;
        })
    })
})


/* Tuve que crear otro js 

Primero seleccione el elemento del carrito.

En los corchetes el carrito , mete los precios , para que luego se muestre los precios.

Después seleccione todas las bebidas, después sigue el selector , la cual se guarda en la variable tipo bebida.

Después  tenemos un identificador el cual lo sacamos, ese Id es de casa uno de los productos que alecciónenos.

Después a cada sabor le agrávanos un evento de cambio , le damos click y cambia.
Cuando cambia se  ejecuta y hace una función flecha , se saca el sabor n , y se guarda lo que se selecciona.

Con el push se agrega

Eso hasta el );

Por último , en el if del js, si el carrito es mayor que 0 , si tiene productos , se le agregará una clase fill , eso para que el carrito ya no diga sin productos.
En caso que no tengo no se aplica 

Y después está el contador .


Y ya es toda Xd  */