function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];  
    const totalCount = cart.reduce((count, item) => count + item.quantity, 0);
    cartCountElement.textContent = `(${totalCount})`;
  }
  