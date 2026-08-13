// =====================================================
// CÁC HÀM BỔ TRỢ
// =====================================================

function checkLogin() {
    // Kiểm tra trạng thái đăng nhập từ localStorage
    const user = localStorage.getItem("currentUser") || localStorage.getItem("isLoggedIn");
    return !!user;
}

function saveProductToCart(productToAdd) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Tìm xem sản phẩm cùng ID + cùng Dung Lượng đã có trong giỏ chưa
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

// Lấy ngôn ngữ an toàn, tương thích tuyệt đối với file lang.js gốc
function getCurrentLang() {
    try {
        const lang = localStorage.getItem('lang');
        if (!lang) return 'vi';
        return JSON.parse(lang);
    } catch (e) {
        return localStorage.getItem('lang') || 'vi';
    }
}

// =====================================================
// LOGIC HIỂN THỊ CHI TIẾT SẢN PHẨM
// =====================================================

function renderProductDetail() {
    const productData = localStorage.getItem("currentWatch");
    console.log(">>> nav: ", productData);

    if (!productData) {
        const nameEl = document.getElementById("name");
        if (nameEl) nameEl.innerText = "Không tìm thấy sản phẩm";
        return;
    }

    const product = JSON.parse(productData);
    const lang = getCurrentLang();

    // 1. TÊN SẢN PHẨM
    const name = document.getElementById("name");
    if (name) {
        name.innerText =
            product.name?.[lang] ||
            product.name?.vi ||
            product.name?.us ||
            "Không có tên";
    }

    // 2. MÔ TẢ
    const description = document.getElementById("description");
    if (description) {
        description.innerText =
            product.desc?.[lang] ||
            product.desc?.vi ||
            product.desc?.us ||
            "";
    }

    // 3. ẢNH SẢN PHẨM
    const mainImage = document.getElementById("mainImage");
    const thumbList = document.getElementById("thumbList");
    const images = [];

    if (product.colors) {
        product.colors.forEach(color => {
            if (color.imgs) {
                color.imgs.forEach(img => {
                    if (!images.includes(img)) {
                        images.push(img);
                    }
                });
            }
        });
    }

    // Ảnh chính
    if (mainImage && images.length > 0) {
        mainImage.src = images[0];
        mainImage.alt = product.name?.[lang] || "Sản phẩm";
    }

    // Ảnh nhỏ (Thumbnails)
    if (thumbList) {
        thumbList.innerHTML = "";
        images.forEach((img, index) => {
            const thumb = document.createElement("img");
            thumb.src = img;
            thumb.className = "thumb";

            if (index === 0) {
                thumb.classList.add("active");
            }

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

        if (oldPrice) {
            oldPrice.innerText = oldValue > newValue ? formatPrice(oldValue) : "";
        }

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

    // 6. NÚT THÊM GIỎ HÀNG
    const addCart = document.getElementById("addCart");
    if (addCart) {
        // Xóa listener cũ (nếu có) để tránh bị nhân bản sự kiện
        const newAddCart = addCart.cloneNode(true);
        addCart.parentNode.replaceChild(newAddCart, addCart);

        newAddCart.addEventListener("click", () => {
            const toast = document.getElementById("cartToast");
            const toastBody = document.getElementById("toastBody");
            const toastHeader = document.getElementById("toastHeader");
            const from = document.getElementById("from");

            if (!checkLogin()) {
                if (toastHeader) toastHeader.className = "toast-header bg-danger text-white";
                if (from) from.innerText = "Thông báo";
                if (toastBody) toastBody.innerText = "Vui lòng đăng nhập!";
                alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ!");
            } else {
                if (toastHeader) toastHeader.className = "toast-header bg-info text-white";
                if (from) from.innerText = "Giỏ hàng";

                const cartProduct = {
                    ...product,
                    image: mainImage ? mainImage.src : (images[0] || ""),
                    selectedStorage: selectedVariant?.storage || "",
                    price: selectedVariant?.newPrice || product.price || 0,
                    quantity: 1
                };

                saveProductToCart(cartProduct);
                if (toastBody) toastBody.innerText = "Đã thêm sản phẩm vào giỏ hàng!";
            }

            if (toast && typeof bootstrap !== "undefined") {
                try {
                    const toastInstance = bootstrap.Toast.getOrCreateInstance(toast);
                    toastInstance.show();
                } catch (e) {
                    console.log("Toast Error:", e);
                }
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
                alert("Vui lòng đăng nhập!");
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

// Chạy hiển thị dữ liệu chi tiết
document.addEventListener("DOMContentLoaded", () => {
    renderProductDetail();

    // Lắng nghe nút chuyển đổi ngôn ngữ để cập nhật lại thông tin sản phẩm mà không cần sửa file lang.js
    const btnVn = document.getElementById('btn_vn');
    const btnUs = document.getElementById('btn_us');

    if (btnVn) {
        btnVn.addEventListener('click', () => {
            setTimeout(renderProductDetail, 50);
        });
    }
    if (btnUs) {
        btnUs.addEventListener('click', () => {
            setTimeout(renderProductDetail, 50);
        });
    }
});

// Gọi hàm loadLang gốc từ lang.js nếu có
if (typeof loadLang === "function") {
    loadLang();
}

// BỌC AN TOÀN HÀM CHECK EMAIL (TRÁNH LỖI LÀM ĐƠ NÚT THÊM GIỎ HÀNG)
function checkEmail() {
    const modalEl = document.getElementById('notifyModal');
    const boxEmail = document.getElementById("box_email");
    const btn = document.getElementById("trigger");
    const error = document.getElementById("email_error");

    // Chỉ thực thi khi các thẻ này có sẵn trong giao diện HTML
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