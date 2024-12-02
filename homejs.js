
const addToCartButtons = document.querySelectorAll(".add-to-cart");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
 
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`Produk "${product.name}" berhasil ditambahkan ke keranjang!`);
}

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    
    const product = {
      id: button.getAttribute("data-id"),
      name: button.getAttribute("data-name"),
      price: parseInt(button.getAttribute("data-price")),
      quantity: 1, 
    };
    addToCart(product);
  });
});


