/* JavaScript */

const cart = {
    items: [],
    addItem: function(item) {
        const existingItem = this.items.find(i => i.id === item.id);
        if (existingItem) {
        existingItem.quantity++;
    } else {
        this.items.push({...item, quantity: 1});
    }
        this.save();
    },
    removeItem: function(itemId) {
        const index = this.items.findIndex(i => i.id === itemId);
        if (index !== -1) {
        this.items.splice(index, 1);
        this.save();
    }
    },
    clear: function() {
        this.items = [];
        this.save();
    },
    getTotal: function() {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    save: function() {
        localStorage.setItem('cart', JSON.stringify(this.items));
        this.render();
    },
    load: function() {
        const items = localStorage.getItem('cart');
        if (items) {
            this.items = JSON.parse(items);
            this.render();
        }
    },
    render: function() {
        const table = document.querySelector('#cart-items');
        table.innerHTML = '';
        this.items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button data-id="${item.id}">Eliminar</button></td>
        `;
        table.appendChild(row);
    });
        const total = document.querySelector('#cart-total');
        total.textContent = `$${this.getTotal().toFixed(2)}`;
    }
};

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', event => {
        const id = button.parentElement.parentElement.dataset.id;
        const name = button.parentElement.parentElement.dataset.name;
        const price = parseFloat(button.parentElement.parentElement.dataset.price);
        cart.addItem({id, name, price});
        updateCartCount();
    });
});

function updateCartCount() {
    const cartCount = document.querySelector('#cart-count');
    cartCount.textContent = cart.items.length;
}

const clearCartButton = document.querySelector('#clear-cart');
clearCartButton.addEventListener('click', event => {
    cart.clear();
});

const cartTable = document.querySelector('#cart-items');
cartTable.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const id = event.target.dataset.id;
        cart.removeItem(id);
    }
});

cart.load();