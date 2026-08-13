// =====================================================
// DANH SÁCH SẢN PHẨM & HÀM BỔ TRỢ
// =====================================================

const products = [
  {
    id: 1,
    name: { vi: "iPhone 17 Pro 256GB | Chính hãng", us: "iPhone 17 Pro 256GB | Genuine" },
    brand: "Apple",
    desc: { vi: "Màn hình 6.3\", chip A19 Pro, trả góp 0%", us: "6.3\" display, A19 Pro chip, 0% installment" },
    variants: [
      { storage: "256GB", oldPrice: 34990000, newPrice: 33890000 },
      { storage: "512GB", oldPrice: 41490000, newPrice: 39990000 },
      { storage: "1TB",   oldPrice: 47990000, newPrice: 45990000 }
    ],
    colors: [
      { name: { vi: "Titan Xanh Đậm", us: "Deep Blue Titanium" }, hex: "#2b3a4a", imgs: ["../../public/imgs/products/sanpham1/i_1.webp"] },
      { name: { vi: "Titan Cam", us: "Orange Titanium" }, hex: "#c96a3e", imgs: ["../../public/imgs/products/sanpham1/i_2.webp"] },
      { name: { vi: "Titan Bạc", us: "Silver Titanium" }, hex: "#d9d9d9", imgs: ["../../public/imgs/products/sanpham1/i_3.webp"] }
    ]
  },
  {
    id: 2,
    name: { vi: "Samsung Galaxy S26 Ultra 5G", us: "Samsung Galaxy S26 Ultra 5G" },
    brand: "Samsung",
    desc: { vi: "Màn hình 6.9\", Snapdragon 8 Elite Gen 5", us: "6.9\" display, Snapdragon 8 Elite Gen 5" },
    variants: [
      { storage: "12GB/256GB", oldPrice: 36990000, newPrice: 31590000 },
      { storage: "12GB/512GB", oldPrice: 42990000, newPrice: 33990000 },
      { storage: "16GB/1TB",   oldPrice: 51990000, newPrice: 44990000 }
    ],
    colors: [
      { name: { vi: "Đen Titan", us: "Titanium Black" }, hex: "#1c1c1e", imgs: ["../../public/imgs/products/sanpham2/i_1.jpg"] },
      { name: { vi: "Bạc Titan", us: "Titanium Silver" }, hex: "#cfd2d6", imgs: ["../../public/imgs/products/sanpham2/i_2.jpg"] },
      { name: { vi: "Xanh Titan", us: "Titanium Blue" }, hex: "#3d4f5c", imgs: ["../../public/imgs/products/sanpham2/i_3.jpg"] }
    ]
  },
  {
    id: 4,
    name: { vi: "Samsung Galaxy A17 5G 8GB 128GB", us: "Samsung Galaxy A17 5G 8GB 128GB" },
    brand: "Samsung",
    desc: { vi: "Màn hình 6.7\", pin bền bỉ", us: "6.7\" display, long-lasting battery" },
    variants: [
      { storage: "8GB/128GB", oldPrice: 6390000, newPrice: 6090000 }
    ],
    colors: [
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["../../public/imgs/products/sanpham4/i_1.webp"] },
      { name: { vi: "Xanh Bạc Hà", us: "Mint Green" }, hex: "#a8c9bd", imgs: ["../../public/imgs/products/sanpham4/i_2.webp"] },
      { name: { vi: "Xanh Dương", us: "Blue" }, hex: "#4a6fa5", imgs: ["../../public/imgs/products/sanpham4/i_3.webp"] }
    ]
  },
  {
    id: 7,
    name: { vi: "OPPO Find X9s 12GB 256GB", us: "OPPO Find X9s 12GB 256GB" },
    brand: "OPPO",
    desc: { vi: "Màn hình 6.59\", camera Hasselblad", us: "6.59\" display, Hasselblad camera" },
    variants: [
      { storage: "12GB/256GB", oldPrice: 24990000, newPrice: 23990000 }
    ],
    colors: [
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["../../public/imgs/products/sanpham7/i_1.webp"] },
      { name: { vi: "Trắng", us: "White" }, hex: "#f2f2f2", imgs: ["../../public/imgs/products/sanpham7/i_2.jpg"] }
    ]
  },
  {
    id: 8,
    name: { vi: "OPPO Find N6 16GB 512GB", us: "OPPO Find N6 16GB 512GB" },
    brand: "OPPO",
    desc: { vi: "Điện thoại gập, màn phụ 6.62\" - màn chính 8.12\"", us: "Foldable phone, 6.62\" cover screen - 8.12\" main screen" },
    variants: [
      { storage: "16GB/512GB", oldPrice: 64990000, newPrice: 64990000 }
    ],
    colors: [
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["../../public/imgs/products/sanpham8/i_1.jpg"] },
      { name: { vi: "Kem", us: "Cream" }, hex: "#e8dfc9", imgs: ["../../public/imgs/products/sanpham8/i_2.webp"] }
    ]
  },
  {
    id: 9,
    name: { vi: "Nubia Neo 5 5G 8GB 128GB", us: "Nubia Neo 5 5G 8GB 128GB" },
    brand: "Nubia",
    desc: { vi: "Màn hình 6.8\", pin dung lượng lớn", us: "6.8\" display, large-capacity battery" },
    variants: [
      { storage: "8GB/128GB", oldPrice: 7490000, newPrice: 6990000 }
    ],
    colors: [
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["../../public/imgs/products/sanpham9/i_1.webp"] },
      { name: { vi: "Bạc", us: "Silver" }, hex: "#cfd2d6", imgs: ["../../public/imgs/products/sanpham9/i_2.webp"] }
    ]
  },
  {
    id: 10,
    name: { vi: "Samsung Galaxy A57 5G 8GB 128GB", us: "Samsung Galaxy A57 5G 8GB 128GB" },
    brand: "Samsung",
    desc: { vi: "Màn hình 6.7\", chip Exynos 1680", us: "6.7\" display, Exynos 1680 chip" },
    variants: [
      { storage: "8GB/128GB", oldPrice: 12490000, newPrice: 11990000 }
    ],
    colors: [
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["../../public/imgs/products/sanpham10/i_1.webp"] },
      { name: { vi: "Xanh", us: "Blue" }, hex: "#3d4f5c", imgs: ["../../public/imgs/products/sanpham10/i_2.webp"] },
      { name: { vi: "Tím", us: "Purple" }, hex: "#a89bc9", imgs: ["../../public/imgs/products/sanpham10/i_3.webp"] }
    ]
  },
  {
    id: 11,
    name: { vi: "Xiaomi 14T Pro 12GB 512GB", us: "Xiaomi 14T Pro 12GB 512GB" },
    brand: "Xiaomi",
    desc: { vi: "Màn hình 6.67\", camera Leica", us: "6.67\" display, Leica camera" },
    variants: [
      { storage: "12GB/512GB", oldPrice: 17670000, newPrice: 12990000 }
    ],
    colors: [
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["../../public/imgs/products/sanpham11/i_1.webp"] },
      { name: { vi: "Xanh Titan", us: "Titanium Blue" }, hex: "#3d4f5c", imgs: ["../../public/imgs/products/sanpham11/i_2.webp"] }
    ]
  },
  {
    id: 12,
    name: { vi: "iPhone Air 256GB | Chính hãng", us: "iPhone Air 256GB | Genuine" },
    brand: "Apple",
    desc: { vi: "Màn hình 6.5\", thiết kế siêu mỏng", us: "6.5\" display, ultra-thin design" },
    variants: [
      { storage: "256GB", oldPrice: 31990000, newPrice: 24990000 },
      { storage: "512GB", oldPrice: 38490000, newPrice: 30490000 },
      { storage: "1TB",   oldPrice: 44990000, newPrice: 35990000 }
    ],
    colors: [
      { name: { vi: "Đen Không Gian", us: "Space Black" }, hex: "#2b2b2b", imgs: ["../../public/imgs/products/sanpham12/i_1.webp"] },
      { name: { vi: "Vàng Sa Mạc", us: "Desert Gold" }, hex: "#c9a86a", imgs: ["../../public/imgs/products/sanpham12/i_2.webp"] },
      { name: { vi: "Trắng Mây", us: "Cloud White" }, hex: "#f2f2f2", imgs: ["../../public/imgs/products/sanpham12/i_3.webp"] }
    ]
  },
  {
    id: 13,
    name: { vi: "OPPO Reno15 F 5G 8GB 256GB", us: "OPPO Reno15 F 5G 8GB 256GB" },
    brand: "OPPO",
    desc: { vi: "Màn hình 6.57\", thiết kế mỏng nhẹ", us: "6.57\" display, slim and lightweight design" },
    variants: [
      { storage: "8GB/256GB", oldPrice: 11990000, newPrice: 11990000 }
    ],
    colors: [
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["../../public/imgs/products/sanpham13/i_1.webp"] },
      { name: { vi: "Hồng", us: "Pink" }, hex: "#e8b9c4", imgs: ["../../public/imgs/products/sanpham13/i_2.webp"] }
    ]
  },
  {
    id: 14,
    name: { vi: "Xiaomi 17T Pro 5G 12GB 512GB", us: "Xiaomi 17T Pro 5G 12GB 512GB" },
    brand: "Xiaomi",
    desc: { vi: "Màn hình 6.83\", camera Telephoto", us: "6.83\" display, Telephoto camera" },
    variants: [
      { storage: "12GB/512GB", oldPrice: 24990000, newPrice: 22990000 }
    ],
    colors: [
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["../../public/imgs/products/sanpham14/i_1.webp"] },
      { name: { vi: "Bạc", us: "Silver" }, hex: "#cfd2d6", imgs: ["../../public/imgs/products/sanpham14/i_2.webp"] }
    ]
  },
  {
    id: 15,
    name: { vi: "Xiaomi 17T 5G 12GB 512GB", us: "Xiaomi 17T 5G 12GB 512GB" },
    brand: "Xiaomi",
    desc: { vi: "Màn hình 6.59\", camera Telephoto", us: "6.59\" display, Telephoto camera" },
    variants: [
      { storage: "12GB/512GB", oldPrice: 20990000, newPrice: 18990000 }
    ],
    colors: [
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["../../public/imgs/products/sanpham15/i_1.webp"] },
      { name: { vi: "Xanh", us: "Blue" }, hex: "#3d4f5c", imgs: ["../../public/imgs/products/sanpham15/i_2.webp"] }
    ]
  },
  {
    id: 3,
    name: { vi: "iPhone 17 Pro Max 256GB | Chính hãng", us: "iPhone 17 Pro Max 256GB | Genuine" },
    brand: "Apple",
    desc: { vi: "Màn hình 6.9\", chip A19 Pro", us: "6.9\" display, A19 Pro chip" },
    variants: [
      { storage: "256GB", oldPrice: 37990000, newPrice: 35990000 },
      { storage: "512GB", oldPrice: 43390000, newPrice: 41990000 },
      { storage: "1TB",   oldPrice: 50990000, newPrice: 48990000 },
      { storage: "2TB",   oldPrice: 63990000, newPrice: 60990000 }
    ],
    colors: [
      { name: { vi: "Titan Xanh Đậm", us: "Deep Blue Titanium" }, hex: "#2b3a4a", imgs: ["../../public/imgs/products/sanpham3/i_1.webp"] },
      { name: { vi: "Titan Cam", us: "Orange Titanium" }, hex: "#c96a3e", imgs: ["../../public/imgs/products/sanpham3/i_2.webp"] },
      { name: { vi: "Titan Bạc", us: "Silver Titanium" }, hex: "#d9d9d9", imgs: ["../../public/imgs/products/sanpham3/i_3.webp"] }
    ]
  },
  {
    id: 16,
    name: { vi: "HONOR 600 5G 8GB 256GB", us: "HONOR 600 5G 8GB 256GB" },
    brand: "HONOR",
    desc: { vi: "Màn hình 6.57\", camera AI, hàng mới về", us: "6.57\" display, AI camera, newly arrived" },
    variants: [
      { storage: "8GB/256GB", oldPrice: 17990000, newPrice: 15990000 }
    ],
    colors: [
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["../../public/imgs/products/sanpham16/i_1.webp"] },
      { name: { vi: "Xanh", us: "Blue" }, hex: "#3d4f5c", imgs: ["../../public/imgs/products/sanpham16/i_2.webp"] }
    ]
  },
  {
    id: 17,
    name: { vi: "Samsung Galaxy S25 Ultra 12GB 256GB", us: "Samsung Galaxy S25 Ultra 12GB 256GB" },
    brand: "Samsung",
    desc: { vi: "Màn hình 6.9\", Snapdragon 8 Elite", us: "6.9\" display, Snapdragon 8 Elite" },
    variants: [
      { storage: "12GB/256GB", oldPrice: 31990000, newPrice: 27490000 },
      { storage: "12GB/512GB", oldPrice: 35490000, newPrice: 30490000 },
      { storage: "16GB/1TB",   oldPrice: 42790000, newPrice: 36790000 }
    ],
    colors: [
      { name: { vi: "Đen Titan", us: "Titanium Black" }, hex: "#1c1c1e", imgs: ["../../public/imgs/products/sanpham17/i_1.webp"] },
      { name: { vi: "Bạc Titan", us: "Titanium Silver" }, hex: "#cfd2d6", imgs: ["../../public/imgs/products/sanpham17/i_2.webp"] },
      { name: { vi: "Xanh Titan", us: "Titanium Blue" }, hex: "#3d4f5c", imgs: ["../../public/imgs/products/sanpham17/i_3.webp"] }
    ]
  },
  {
    id: 18,
    name: { vi: "iPhone 16 Pro Max 256GB", us: "iPhone 16 Pro Max 256GB" },
    brand: "Apple",
    desc: { vi: "Màn hình 6.9\", chip A18 Pro, sắp về hàng", us: "6.9\" display, A18 Pro chip, coming soon" },
    variants: [
      { storage: "256GB", oldPrice: 34990000, newPrice: 30990000 }
    ],
    colors: [
      { name: { vi: "Titan Đen", us: "Black Titanium" }, hex: "#2b2b2b", imgs: ["../../public/imgs/products/sanpham18/i_1.webp"] },
      { name: { vi: "Titan Sa Mạc", us: "Desert Titanium" }, hex: "#c9a86a", imgs: ["../../public/imgs/products/sanpham18/i_2.webp"] },
      { name: { vi: "Titan Tự Nhiên", us: "Natural Titanium" }, hex: "#8a8a8a", imgs: ["../../public/imgs/products/sanpham18/i_3.webp"] }
    ]
  },
  {
    id: 19,
    name: { vi: "Samsung Galaxy S25 Plus 256GB", us: "Samsung Galaxy S25 Plus 256GB" },
    brand: "Samsung",
    desc: { vi: "Màn hình 6.7\", Snapdragon 8 Elite", us: "6.7\" display, Snapdragon 8 Elite" },
    variants: [
      { storage: "12GB/256GB", oldPrice: 26500000, newPrice: 20290000 },
      { storage: "12GB/512GB", oldPrice: 29490000, newPrice: 22990000 }
    ],
    colors: [
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["../../public/imgs/products/sanpham19/i_1.webp"] },
      { name: { vi: "Bạc", us: "Silver" }, hex: "#cfd2d6", imgs: ["../../public/imgs/products/sanpham19/i_2.webp"] }
    ]
  },
  {
    id: 20,
    name: { vi: "iPhone 15 128GB | Chính hãng VN/A", us: "iPhone 15 128GB | Genuine VN/A" },
    brand: "Apple",
    desc: { vi: "Màn hình 6.1\", chip A16 Bionic", us: "6.1\" display, A16 Bionic chip" },
    variants: [
      { storage: "128GB", oldPrice: 19990000, newPrice: 17990000 }
    ],
    colors: [
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["../../public/imgs/products/sanpham20/i_1.webp"] },
      { name: { vi: "Xanh Dương", us: "Blue" }, hex: "#4a6fa5", imgs: ["../../public/imgs/products/sanpham20/i_2.webp"] },
      { name: { vi: "Hồng", us: "Pink" }, hex: "#e8b9c4", imgs: ["../../public/imgs/products/sanpham20/i_3.webp"] },
      { name: { vi: "Vàng", us: "Gold" }, hex: "#e6d19a", imgs: ["../../public/imgs/products/sanpham20/i_4.webp"] }
    ]
  }
];

function checkLogin() {
    const user = localStorage.getItem("currentUser") || localStorage.getItem("isLoggedIn");
    return !!user;
}

function saveProductToCart(productToAdd) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    const existingIndex = cart.findIndex(
        item => item.id === productToAdd.id && item.selectedStorage === productToAdd.selectedStorage
    );

    if (existingIndex > -1) {
        cart[existingIndex].quantity = (Number(cart[existingIndex].quantity) || 1) + 1;
    } else {
        cart.push(productToAdd);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}

function getCurrentLang() {
    try {
        const lang = localStorage.getItem('lang');
        if (!lang) return 'vi';
        return JSON.parse(lang);
    } catch (e) {
        return localStorage.getItem('lang') || 'vi';
    }
}

// Hàm hiển thị thông báo Toast linh hoạt
function showNotification(message, isError = false) {
    const toast = document.getElementById("cartToast");
    const toastBody = document.getElementById("toastBody");
    const toastHeader = document.getElementById("toastHeader");
    const from = document.getElementById("from");

    if (toastHeader) {
        toastHeader.className = isError 
            ? "toast-header bg-danger text-white" 
            : "toast-header bg-success text-white";
    }
    if (from) from.innerText = isError ? "Thông báo" : "Giỏ hàng";
    if (toastBody) toastBody.innerText = message;

    if (toast && typeof bootstrap !== "undefined") {
        try {
            // Tương thích cả Bootstrap 4 & 5
            if (bootstrap.Toast.getOrCreateInstance) {
                bootstrap.Toast.getOrCreateInstance(toast).show();
            } else {
                new bootstrap.Toast(toast).show();
            }
        } catch (e) {
            alert(message);
        }
    } else {
        alert(message);
    }
}

// =====================================================
// LOGIC HIỂN THỊ CHI TIẾT SẢN PHẨM
// =====================================================

function renderProductDetail() {
    const productData = localStorage.getItem("currentWatch");

    if (!productData) {
        const nameEl = document.getElementById("name");
        if (nameEl) nameEl.innerText = "Không tìm thấy sản phẩm";
        return;
    }

    let product;
    if (!isNaN(productData)) {
        product = products.find(item => item.id == productData);
    } else {
        try {
            product = JSON.parse(productData);
        } catch(e) {
            product = products.find(item => item.id == productData);
        }
    }

    if (!product) return;

    const lang = getCurrentLang();

    // 1. TÊN SẢN PHẨM
    const name = document.getElementById("name");
    if (name) {
        name.innerText = product.name?.[lang] || product.name?.vi || product.name?.us || "Không có tên";
    }

    // 2. MÔ TẢ
    const description = document.getElementById("description");
    if (description) {
        description.innerText = product.desc?.[lang] || product.desc?.vi || product.desc?.us || "";
    }

    // 3. ẢNH SẢN PHẨM
    const mainImage = document.getElementById("mainImage");
    const thumbList = document.getElementById("thumbList");
    const images = [];

    if (product.colors) {
        product.colors.forEach(color => {
            if (color.imgs) {
                color.imgs.forEach(img => {
                    if (!images.includes(img)) images.push(img);
                });
            }
        });
    }

    if (mainImage && images.length > 0) {
        mainImage.src = images[0];
        mainImage.alt = product.name?.[lang] || "Sản phẩm";
    }

    if (thumbList) {
        thumbList.innerHTML = "";
        images.forEach((img, index) => {
            const thumb = document.createElement("img");
            thumb.src = img;
            thumb.className = "thumb";
            if (index === 0) thumb.classList.add("active");

            thumb.addEventListener("click", () => {
                if (mainImage) mainImage.src = img;
                document.querySelectorAll(".thumb").forEach(item => item.classList.remove("active"));
                thumb.classList.add("active");
            });

            thumbList.appendChild(thumb);
        });
    }

    // 4. DUNG LƯỢNG
    const storage = document.getElementById("storage");
    let selectedVariant = product.variants?.[0];

    function renderStorage() {
        if (!storage) return;
        storage.innerHTML = "";

        if (!product.variants?.length) {
            storage.innerText = "Không có";
            return;
        }

        product.variants.forEach((variant, index) => {
            const button = document.createElement("button");
            button.type = "button";
            button.innerText = variant.storage;

            if (index === 0) {
                button.classList.add("active");
                selectedVariant = variant;
            }

            button.addEventListener("click", () => {
                document.querySelectorAll("#storage button").forEach(item => item.classList.remove("active"));
                button.classList.add("active");
                selectedVariant = variant;
                updatePrice();
            });

            storage.appendChild(button);
        });
    }

    // 5. GIÁ CẢ
    const newPrice = document.getElementById("newPrice");
    const oldPrice = document.getElementById("oldPrice");
    const discount = document.getElementById("discount");

    function formatPrice(price) {
        return Number(price).toLocaleString("vi-VN") + "đ";
    }

    function updatePrice() {
        if (!selectedVariant) return;

        const newValue = Number(selectedVariant.newPrice || product.price || 0);
        const oldValue = Number(selectedVariant.oldPrice || 0);

        if (newPrice) newPrice.innerText = formatPrice(newValue);
        if (oldPrice) oldPrice.innerText = oldValue > newValue ? formatPrice(oldValue) : "";

        if (discount) {
            if (oldValue > newValue) {
                const percent = Math.round((1 - newValue / oldValue) * 100);
                discount.innerText = `-${percent}%`;
            } else {
                discount.innerText = "";
            }
        }
    }

    renderStorage();
    updatePrice();

    // 6. NÚT THÊM GIỎ HÀNG (SỬA LỖI HIỂN THỊ THÔNG BÁO)
    const addCart = document.getElementById("addCart");
    if (addCart) {
        const newAddCart = addCart.cloneNode(true);
        addCart.parentNode.replaceChild(newAddCart, addCart);

        newAddCart.addEventListener("click", () => {
            if (!checkLogin()) {
                showNotification("Vui lòng đăng nhập để thêm sản phẩm!", true);
            } else {
                const cartProduct = {
                    ...product,
                    image: mainImage ? mainImage.src : (images[0] || ""),
                    selectedStorage: selectedVariant?.storage || "",
                    price: selectedVariant?.newPrice || product.price || 0,
                    quantity: 1
                };

                saveProductToCart(cartProduct);
                showNotification("Đã thêm sản phẩm vào giỏ hàng thành công!", false);
            }
        });
    }

    // 7. NÚT MUA NGAY
    const buyNow = document.getElementById("buyNow");
    if (buyNow) {
        const newBuyNow = buyNow.cloneNode(true);
        buyNow.parentNode.replaceChild(newBuyNow, buyNow);

        newBuyNow.addEventListener("click", () => {
            if (!checkLogin()) {
                showNotification("Vui lòng đăng nhập!", true);
                return;
            }

            const cartProduct = {
                ...product,
                image: mainImage ? mainImage.src : (images[0] || ""),
                selectedStorage: selectedVariant?.storage || "",
                price: selectedVariant?.newPrice || product.price || 0,
                quantity: 1
            };

            saveProductToCart(cartProduct);
            window.location.href = "../giohang/giohang.html";
        });
    }
}

// KHỞI TẠO ĐỔ DỮ LIỆU VÀ LẮNG NGHE SỰ KIỆN ĐỔI NGÔN NGỮ
document.addEventListener("DOMContentLoaded", () => {
    renderProductDetail();

    const btnVn = document.getElementById('btn_vn');
    const btnUs = document.getElementById('btn_us');

    if (btnVn) {
        btnVn.addEventListener('click', () => setTimeout(renderProductDetail, 50));
    }
    if (btnUs) {
        btnUs.addEventListener('click', () => setTimeout(renderProductDetail, 50));
    }
});

if (typeof loadLang === "function") {
    loadLang();
}

// BỌC AN TOÀN CHO HÀM CHECK EMAIL
function checkEmail() {
    const modalEl = document.getElementById('notifyModal');
    const boxEmail = document.getElementById("box_email");
    const btn = document.getElementById("trigger");
    const error = document.getElementById("email_error");

    if (!modalEl || !btn || !boxEmail) return;

    const modal = new bootstrap.Modal(modalEl);
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    btn.addEventListener('click', () => {
        if (!boxEmail.value.trim()) {
            if (error) error.innerText = "Không được để email trống";
            return;
        }
        if (!regex.test(boxEmail.value.trim())) {
            if (error) error.innerText = "Email không hợp lệ!";
            return;
        }

        modal.show();
        boxEmail.value = "";
        if (error) error.innerText = "";
    });
}

checkEmail();