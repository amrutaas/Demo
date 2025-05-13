let cart = [];

function addToCart(id, name, price) {
  const item = { id, name, price };
  cart.push(item);
  updateCartUI();
}

function updateCartUI() {
  const cartCount = document.getElementById('cart-count');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  
  cartCount.textContent = cart.length;
  
  // Clear current items
  cartItems.innerHTML = '';
  
  let total = 0;
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(listItem);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
}

function toggleCart() {
  const cartModal = document.getElementById('cart-modal');
  cartModal.style.display = cartModal.style.display === 'flex' ? 'none' : 'flex';
}

function checkout() {
  alert('Proceeding to checkout...');
  // This would be where you integrate with a payment API (like Stripe or PayPal)
  cart = [];
  updateCartUI();
  toggleCart();
}
