document.addEventListener("DOMContentLoaded", function () {
    function loadCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const cartItemsContainer = document.querySelector(".cart-items");
        const orderList = document.getElementById("order-list");
        const totalAmount = document.getElementById("total-amount");

        cartItemsContainer.innerHTML = "";
        orderList.innerHTML = "";
        let total = 0;

        cart.forEach(product => {
            total += product.price;

            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
                <button class="remove-btn" data-id="${product.id}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemDiv);

            const orderItem = document.createElement("li");
            orderItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
            orderList.appendChild(orderItem);
        });

        totalAmount.textContent = total.toFixed(2);

        document.querySelectorAll(".remove-btn").forEach(button => {
            button.addEventListener("click", function () {
                const productId = this.getAttribute("data-id");
                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                cart = cart.filter(item => item.id !== productId);
                localStorage.setItem("cart", JSON.stringify(cart));
                loadCart();
            });
        });
    }

    document.getElementById("checkout-btn").addEventListener("click", function () {
        window.location.href = "../razorpay/index.html";  // Replace with your actual Razorpay link
    });

    loadCart();
});