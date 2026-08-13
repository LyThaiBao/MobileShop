// =====================================================
// CÁC HÀM BỔ TRỢ (LOẠI BỎ IMPORT ES MODULE)
// =====================================================

function checkLogin() {
    // Kiểm tra trạng thái đăng nhập từ localStorage
    const user = localStorage.getItem("currentUser") || localStorage.getItem("isLoggedIn");
    return !!user;
}

function saveProductToCart(productToAdd) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Tìm xem sản phẩm cùng dung lượng đã có chưa
    const existingIndex = cart.findIndex(
        item => item.id === productToAdd.id && item.selectedStorage === productToAdd.selectedStorage
    );

    if (existingIndex > -1) {
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
    } else {
        cart.push(productToAdd);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}

function getLang() {
    return localStorage.getItem("lang") || "vi";
}

// =====================================================
// LOGIC HIỂN THỊ CHI TIẾT SẢN PHẨM
// =====================================================

const productData = localStorage.getItem("currentWatch");
console.log(">>> nav: ",productData)
if (!productData) {
    const nameEl = document.getElementById("name");
    if (nameEl) nameEl.innerText = "Không tìm thấy sản phẩm";
} else {
    const product = JSON.parse(productData);
    const lang = getLang();

    // TÊN SẢN PHẨM
    const name = document.getElementById("name");
    if (name) {
        name.innerText =
            product.name?.[lang] ||
            product.name?.vi ||
            product.name?.us ||
            "Không có tên";
    }

    // MÔ TẢ
    const description = document.getElementById("description");
    if (description) {
        description.innerText =
            product.desc?.[lang] ||
            product.desc?.vi ||
            product.desc?.us ||
            "";
    }

    // ẢNH SẢN PHẨM
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

    // ẢNH CHÍNH
    if (mainImage && images.length > 0) {
        mainImage.src = images[0];
        mainImage.alt = product.name?.[lang] || "Sản phẩm";
    }

    // ẢNH NHỎ (THUMBNAILS)
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

    // DUNG LƯỢNG
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

    // GIÁ
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
            if (oldValue > newValue) {
                oldPrice.innerText = formatPrice(oldValue);
            } else {
                oldPrice.innerText = "";
            }
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

    // THÊM GIỎ HÀNG
    const addCart = document.getElementById("addCart");
    if (addCart) {
        addCart.addEventListener("click", () => {
            const toast = document.getElementById("cartToast");
            const toastBody = document.getElementById("toastBody");
            const toastHeader = document.getElementById("toastHeader");
            const from = document.getElementById("from");

            if (!checkLogin()) {
                if (toastHeader) toastHeader.className = "toast-header bg-danger text-white";
                if (from) from.innerText = "Thông báo";
                if (toastBody) toastBody.innerText = "Vui lòng đăng nhập!";
            } else {
                if (toastHeader) toastHeader.className = "toast-header bg-info text-white";
                if (from) from.innerText = "Giỏ hàng";

                const cartProduct = {
                    ...product,
                    selectedStorage: selectedVariant?.storage,
                    price: selectedVariant?.newPrice || product.price,
                    quantity: 1
                };

                saveProductToCart(cartProduct);
                if (toastBody) toastBody.innerText = "Đã thêm sản phẩm vào giỏ hàng!";
            }

            if (toast) {
                const toastInstance = bootstrap.Toast.getOrCreateInstance(toast);
                toastInstance.show();
            }
        });
    }

    // MUA NGAY
    const buyNow = document.getElementById("buyNow");
    if (buyNow) {
        buyNow.addEventListener("click", () => {
            if (!checkLogin()) {
                alert("Vui lòng đăng nhập!");
                return;
            }

            const cartProduct = {
                ...product,
                selectedStorage: selectedVariant?.storage,
                price: selectedVariant?.newPrice || product.price,
                quantity: 1
            };

            saveProductToCart(cartProduct);
            window.location.href = "../giohang/giohang.html";
        });
    }
}

// Gọi hàm đa ngôn ngữ nếu có file lang.js hỗ trợ
if (typeof loadLang === "function") {
    loadLang();
}
function  checkEmail(){
    const modal = new bootstrap.Modal(document.getElementById('notifyModal'));
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const boxEmail = document.getElementById("box_email");
    const btn = document.getElementById("trigger");
    const error = document.getElementById("email_error");
    btn.addEventListener('click',()=>{
       if(!boxEmail.value.trim()){
            error.innerText = "Không được để email trống";
            return;
       }
       if(!regex.test(boxEmail.value.trim())){
        error.innerText = "Email không hợp lệ!"
        return;
       }
   
           modal.show();
           boxEmail.value = error.innerText = ""; 
    })

}
checkEmail();