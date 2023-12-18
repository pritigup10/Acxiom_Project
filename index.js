document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');
    const cartCount = document.getElementById('cart-count');

    const products = [
        { id: 1, name: 'Product 1', price: 20.99 },
        { id: 2, name: 'Product 2', price: 14.99 },
        { id: 3, name: 'Product 3', price: 29.99 },
    ];

    function renderProducts() {
        productList.innerHTML = '';

        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productItem);
        });
    }

    function updateCartCount() {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartCount.textContent = cartItems.length;
    }

    window.addToCart = function (productId) {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.push(productId);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        updateCartCount();
    };

    renderProducts();
    updateCartCount();
});
