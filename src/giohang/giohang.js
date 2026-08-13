let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cartContainer");

const formatPrice = (p) => Number(p || 0).toLocaleString("vi-VN") + "đ";

function save() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
    if (!container) return;
    container.innerHTML = "";

    if (!cart.length) {
        container.innerHTML = `
            <div class="text-center py-5">
                <h3 data-lang="cart.empty.title">Giỏ hàng trống</h3>
                <p data-lang="cart.empty.content">Chưa có sản phẩm nào.</p>
            </div>
        `;
        updateTotal();
        return;
    }

    cart.forEach((p, i) => {
        const name = typeof p.name === "object" ? p.name.vi || p.name.us : p.name;
        const image = p.colors?.[0]?.imgs?.[0] || "";
        const price = Number(p.price ?? p.variants?.[0]?.newPrice ?? 0);

        p.quantity = p.quantity || 1;

        const item = document.createElement("div");
        item.className = "cart-item";

        item.innerHTML = `
            <div class="product-img">
                <img src="${image}" alt="${name}">
            </div>

            <div class="product-info">
                <h2>${name}</h2>
                <div class="price-red">
                    ${formatPrice(price)}
                </div>
            </div>

            <div class="quantity">
                <button class="minus">−</button>
                <span>${p.quantity}</span>
                <button class="plus">+</button>
            </div>

            <button class="delete-btn">
                <i class="bi bi-trash3"></i>
            </button>
        `;

        container.appendChild(item);

        item.querySelector(".minus").onclick = () => {
            if (p.quantity > 1) p.quantity--;
            save();
            renderCart();
        };

        item.querySelector(".plus").onclick = () => {
            p.quantity++;
            save();
            renderCart();
        };

        item.querySelector(".delete-btn").onclick = () => {
            cart.splice(i, 1);
            save();
            renderCart();
        };
    });

    updateTotal();
}

function updateTotal() {
    const money = cart.reduce((sum, p) => {
        const price = Number(p.price ?? p.variants?.[0]?.newPrice ?? 0);
        return sum + price * (p.quantity || 1);
    }, 0);

    const cartCountEl = document.getElementById("cartCount");
    const subtotalEl = document.getElementById("subtotal");
    const totalEl = document.getElementById("total");

    if (cartCountEl) cartCountEl.innerText = `(${cart.reduce((s, p) => s + (p.quantity || 1), 0)})`;
    if (subtotalEl) subtotalEl.innerText = formatPrice(money);
    if (totalEl) totalEl.innerText = formatPrice(money);
}

// THANH TOÁN
document.querySelector(".pay-btn")?.addEventListener("click", () => {
    if (!cart.length) {
        alert("Giỏ hàng đang trống!");
        return;
    }

    alert("Đã thanh toán thành công!");

    cart = [];
    save();
    renderCart();
});

// Chạy hàm khởi tạo giao diện
renderCart();