// Manejo del carrito de compras
const cart = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let total = 0;

document.querySelectorAll(".add-to-cart").forEach((button, index) => {
    button.addEventListener("click", () => {
        const product = document.querySelectorAll(".product")[index];
        const productName = product.querySelector("h2").textContent;
        const productPrice = parseFloat(product.querySelector(".price").textContent.slice(1));

        const cartItem = document.createElement("li");
        cartItem.innerHTML = `
            <span>${productName}</span>
            <span>$${productPrice.toFixed(2)}</span>
        `;

        cart.appendChild(cartItem);

        total += productPrice;
        cartTotal.textContent = total.toFixed(2);
    });
});
