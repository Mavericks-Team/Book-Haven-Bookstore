// Add to Cart Function
function addToCart(itemName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ itemName, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${itemName} has been added to the cart.`);
}

// Display Cart Items as Table
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsContainer = document.getElementById('cart-items');
    let total = 0;

    // Clear any existing rows in the table
    cartItemsContainer.innerHTML = '';

    // Populate table rows for each cart item
    cart.forEach((item) => {
        let row = document.createElement('tr');
        
        let itemNameCell = document.createElement('td');
        itemNameCell.textContent = item.itemName;
        row.appendChild(itemNameCell);
        
        let priceCell = document.createElement('td');
        priceCell.textContent = `$${item.price.toFixed(2)}`;
        row.appendChild(priceCell);
        
        cartItemsContainer.appendChild(row);

        total += item.price;
    });

    // Update total
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

// Clear Cart Function
function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
    alert('Cart has been cleared.');
}

// Call displayCart if on the cart page
if (window.location.pathname.includes('cart.html')) {
    displayCart();
}

// Subscribe Function
function subscribe() {
    let email = prompt("Enter your email to subscribe:");
    if (email && email.includes('@')) {
        alert("Thank you for subscribing!");
    } else {
        alert("Please enter a valid email address.");
    }
}

// checkout modal

function openCheckoutModal() {
    document.getElementById("checkout-modal").style.display = "flex";
    document.getElementById("modal-cart-total").textContent = document.getElementById("cart-total").textContent;
}

function closeCheckoutModal() {
    document.getElementById("checkout-modal").style.display = "none";
}
