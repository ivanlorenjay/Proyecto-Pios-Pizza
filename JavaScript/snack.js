const addButtons = document.querySelectorAll('#Snacks button');
const cartContainer = document.querySelector('#Pedidos div');
const totalElement = document.querySelector('[data-price]');

let total = 0;

function addToCart(name, price) {

    const productElement = document.createElement('p');
    productElement.textContent = name + ' - $' + price;

    cartContainer.appendChild(productElement)

    total += price;
    totalElement.dataset.price = '$' + total;
    totalElement.textContent = 'Total: $' + total;
}

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentNode.querySelector('h3').textContent;
        const productPrice = parseFloat(button.parentNode.querySelector('[data-Price]').dataset.price);

        addToCart(productName, productPrice);
    });
});
