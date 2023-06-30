let cart = [];

function addToCart(itemName, itemPrice, itemQuantity) {
    let item = {
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity
    };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCart() {
    let cartItems = JSON.parse(localStorage.getItem('cart'));
    let cartIcon = document.querySelector('.cart-icon');
    let cartTotal = 0;
    cartItems.forEach(item => {
      cartTotal += item.price * item.quantity;
    });
    cartIcon.innerHTML = `Cart (${cartItems.length}) - $${cartTotal.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
}

window.addEventListener('load', displayCart);
