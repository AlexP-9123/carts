const cart = [];

const totalDisplay = document.querySelector(".red");
const cartList = document.querySelector(".full-list");
const buttons = document.querySelectorAll(".wkap");

function displayCart() {
    cartList.innerHTML = "";

    cart.forEach((product) => {
        const li = document.createElement("li");
        const subtotal = product.price * product.quantity;

        li.textContent =
            product.name +
            " - $" + product.price.toFixed(2) +
            " x " + product.quantity +
            " = $" + subtotal.toFixed(2);

        cartList.appendChild(li);
    });
}

function calculate() {
    let total = 0;

    cart.forEach((product) => {
        total += product.price * product.quantity;
    });

    totalDisplay.textContent = "$" + total.toFixed(2);
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const card = button.closest(".cards");
        const name = card.querySelector(".name").textContent.trim();
        const priceText = card.querySelector(".price span").textContent;
        const price = Number(priceText.replace("$", ""));

        const existingProduct = cart.find((product) => {
            return product.name === name;
        });

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({
                name: name,
                price: price,
                quantity: 1
            });
        }

        displayCart();
        calculate();
    });
});
