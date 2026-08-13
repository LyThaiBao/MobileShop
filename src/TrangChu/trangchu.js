// Dữ liệu sản phẩm trực tiếp tại file trang chủ
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
      { name: { vi: "Titan Xanh Đậm", us: "Deep Blue Titanium" }, hex: "#2b3a4a", imgs: ["public/imgs/products/sanpham1/i_1.webp"] },
      { name: { vi: "Titan Cam", us: "Orange Titanium" }, hex: "#c96a3e", imgs: ["public/imgs/products/sanpham1/i_2.webp"] },
      { name: { vi: "Titan Bạc", us: "Silver Titanium" }, hex: "#d9d9d9", imgs: ["public/imgs/products/sanpham1/i_3.webp"] }
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
      { name: { vi: "Đen Titan", us: "Titanium Black" }, hex: "#1c1c1e", imgs: ["public/imgs/products/sanpham2/i_1.jpg"] },
      { name: { vi: "Bạc Titan", us: "Titanium Silver" }, hex: "#cfd2d6", imgs: ["public/imgs/products/sanpham2/i_2.jpg"] },
      { name: { vi: "Xanh Titan", us: "Titanium Blue" }, hex: "#3d4f5c", imgs: ["public/imgs/products/sanpham2/i_3.jpg"] }
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
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["public/imgs/products/sanpham4/i_1.webp"] },
      { name: { vi: "Xanh Bạc Hà", us: "Mint Green" }, hex: "#a8c9bd", imgs: ["public/imgs/products/sanpham4/i_2.webp"] },
      { name: { vi: "Xanh Dương", us: "Blue" }, hex: "#4a6fa5", imgs: ["public/imgs/products/sanpham4/i_3.webp"] }
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
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["public/imgs/products/sanpham7/i_1.webp"] },
      { name: { vi: "Trắng", us: "White" }, hex: "#f2f2f2", imgs: ["public/imgs/products/sanpham7/i_2.jpg"] }
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
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["public/imgs/products/sanpham8/i_1.jpg"] },
      { name: { vi: "Kem", us: "Cream" }, hex: "#e8dfc9", imgs: ["public/imgs/products/sanpham8/i_2.webp"] }
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
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["public/imgs/products/sanpham9/i_1.webp"] },
      { name: { vi: "Bạc", us: "Silver" }, hex: "#cfd2d6", imgs: ["public/imgs/products/sanpham9/i_2.webp"] }
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
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["public/imgs/products/sanpham10/i_1.webp"] },
      { name: { vi: "Xanh", us: "Blue" }, hex: "#3d4f5c", imgs: ["public/imgs/products/sanpham10/i_2.webp"] },
      { name: { vi: "Tím", us: "Purple" }, hex: "#a89bc9", imgs: ["public/imgs/products/sanpham10/i_3.webp"] }
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
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["public/imgs/products/sanpham11/i_1.webp"] },
      { name: { vi: "Xanh Titan", us: "Titanium Blue" }, hex: "#3d4f5c", imgs: ["public/imgs/products/sanpham11/i_2.webp"] }
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
      { name: { vi: "Đen Không Gian", us: "Space Black" }, hex: "#2b2b2b", imgs: ["public/imgs/products/sanpham12/i_1.webp"] },
      { name: { vi: "Vàng Sa Mạc", us: "Desert Gold" }, hex: "#c9a86a", imgs: ["public/imgs/products/sanpham12/i_2.webp"] },
      { name: { vi: "Trắng Mây", us: "Cloud White" }, hex: "#f2f2f2", imgs: ["public/imgs/products/sanpham12/i_3.webp"] }
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
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["public/imgs/products/sanpham13/i_1.webp"] },
      { name: { vi: "Hồng", us: "Pink" }, hex: "#e8b9c4", imgs: ["public/imgs/products/sanpham13/i_2.webp"] }
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
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["public/imgs/products/sanpham14/i_1.webp"] },
      { name: { vi: "Bạc", us: "Silver" }, hex: "#cfd2d6", imgs: ["public/imgs/products/sanpham14/i_2.webp"] }
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
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["public/imgs/products/sanpham15/i_1.webp"] },
      { name: { vi: "Xanh", us: "Blue" }, hex: "#3d4f5c", imgs: ["public/imgs/products/sanpham15/i_2.webp"] }
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
      { name: { vi: "Titan Xanh Đậm", us: "Deep Blue Titanium" }, hex: "#2b3a4a", imgs: ["public/imgs/products/sanpham3/i_1.webp"] },
      { name: { vi: "Titan Cam", us: "Orange Titanium" }, hex: "#c96a3e", imgs: ["public/imgs/products/sanpham3/i_2.webp"] },
      { name: { vi: "Titan Bạc", us: "Silver Titanium" }, hex: "#d9d9d9", imgs: ["public/imgs/products/sanpham3/i_3.webp"] }
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
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["public/imgs/products/sanpham16/i_1.webp"] },
      { name: { vi: "Xanh", us: "Blue" }, hex: "#3d4f5c", imgs: ["public/imgs/products/sanpham16/i_2.webp"] }
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
      { name: { vi: "Đen Titan", us: "Titanium Black" }, hex: "#1c1c1e", imgs: ["public/imgs/products/sanpham17/i_1.webp"] },
      { name: { vi: "Bạc Titan", us: "Titanium Silver" }, hex: "#cfd2d6", imgs: ["public/imgs/products/sanpham17/i_2.webp"] },
      { name: { vi: "Xanh Titan", us: "Titanium Blue" }, hex: "#3d4f5c", imgs: ["public/imgs/products/sanpham17/i_3.webp"] }
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
      { name: { vi: "Titan Đen", us: "Black Titanium" }, hex: "#2b2b2b", imgs: ["public/imgs/products/sanpham18/i_1.webp"] },
      { name: { vi: "Titan Sa Mạc", us: "Desert Titanium" }, hex: "#c9a86a", imgs: ["public/imgs/products/sanpham18/i_2.webp"] },
      { name: { vi: "Titan Tự Nhiên", us: "Natural Titanium" }, hex: "#8a8a8a", imgs: ["public/imgs/products/sanpham18/i_3.webp"] }
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
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["public/imgs/products/sanpham19/i_1.webp"] },
      { name: { vi: "Bạc", us: "Silver" }, hex: "#cfd2d6", imgs: ["public/imgs/products/sanpham19/i_2.webp"] }
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
      { name: { vi: "Đen", us: "Black" }, hex: "#1c1c1e", imgs: ["public/imgs/products/sanpham20/i_1.webp"] },
      { name: { vi: "Xanh Dương", us: "Blue" }, hex: "#4a6fa5", imgs: ["public/imgs/products/sanpham20/i_2.webp"] },
      { name: { vi: "Hồng", us: "Pink" }, hex: "#e8b9c4", imgs: ["public/imgs/products/sanpham20/i_3.webp"] },
      { name: { vi: "Vàng", us: "Gold" }, hex: "#e6d19a", imgs: ["public/imgs/products/sanpham20/i_4.webp"] }
    ]
  }
];
// Hàm định dạng tiền tệ
function formatVietnameseMoney(number) {
    const arr = [];
    const s = number.toString();
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        count++;
        arr.push(s[i]);
        if (count == 3 && i != 0 && s[i - 1] != "-") {
            arr.push(".");
            count = 0;
        }
    }
    return `${arr.reverse().join("")}đ`;
}

// Kiểm tra đăng nhập
function checkLogin() {
    const username = JSON.parse(localStorage.getItem("mobileShopCurrentUser"));
    return username ? username.fullName : false;
}

// Lưu sản phẩm vào giỏ hàng
function saveProductToCart(product) {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = [...currentCart, product];
    localStorage.setItem("cart", JSON.stringify(newCart));
}

// Xử lý thêm vào giỏ hàng và bật Toast
function addToCart(product) {
    const toastElement = document.getElementById('cartToast');
    if (!toastElement) return;
    const toast = new bootstrap.Toast(toastElement);
    const comeFrom = document.getElementById("from");
    const toastHeader = document.getElementById("toastHeader");
    const toastBody = document.getElementById("toastBody");

    if (!checkLogin()) {
        toastHeader.setAttribute('class', 'toast-header bg-danger');
        comeFrom.innerText = "Thông Báo";
        comeFrom.setAttribute('data-lang', 'toast.notifyTitle');
        toastBody.innerText = "Vui lòng đăng nhập";
        toastBody.setAttribute('data-lang', 'toast.loginRequired');
    } else {
        toastHeader.setAttribute('class', 'toast-header bg-info');
        comeFrom.innerText = "Giỏ Hàng";
        comeFrom.setAttribute('data-lang', 'toast.cartTitle');
        toastBody.innerText = "Đã thêm sản phẩm vào giỏ hàng!";
        toastBody.setAttribute('data-lang', 'toast.addSuccess');
        saveProductToCart(product);
    }
    
    // Cập nhật lại ngôn ngữ cho Toast
    const currentLangCode = JSON.parse(localStorage.getItem('lang')) || 'vi';
    const langData = currentLangCode === 'vi' ? window.translations.vi : window.translations.us;
    const elements = toastElement.querySelectorAll('[data-lang]');
    elements.forEach((el) => {
        const key = el.getAttribute('data-lang');
        const value = key.split('.').reduce((oldVal, currentVal) => oldVal?.[currentVal], langData);
        if (value) el.textContent = value;
    });

    toast.show();
}

// Render danh sách sản phẩm ra giao diện
function renderProduct(productsList, addToCartCallback, rootId) {
    const currentLangCode = JSON.parse(localStorage.getItem('lang')) || 'vi';
    const containProduct = document.getElementById(rootId);
    if (!containProduct) return;

    const fragment = document.createDocumentFragment();
    const row = document.createElement('div');
    row.classList.add('row');

    const htmlProduct = productsList.map((item) => {
        const columnWrapper = document.createElement('div');
        columnWrapper.classList.add('col-12', 'col-md-6', 'col-lg-3', 'mt-3');

       const productCard = document.createElement('section');
        productCard.addEventListener("click", (e) => {
        localStorage.setItem('currentWatch', JSON.stringify(item));
           window.location.href = "src/chitiet/chitiet.html";
    });
        productCard.classList.add('product_card', 'd-flex', 'flex-column', 'h-100', 'justify-content-between', 'align-items-center');

        const containImg = document.createElement('div');
        containImg.classList.add('w-100', 'text-center');
        const img = document.createElement('img');
        img.classList.add('w-75');
        img.setAttribute('src', item.colors?.[0]?.imgs?.[0] || '');
        containImg.append(img);

        const containDesc = document.createElement('div');
        containDesc.classList.add('containDesc', 'text-center');

        const title = document.createElement('h5');
        title.innerText = item.name[currentLangCode] || item.name.vi;
        title.classList.add('product-title');

        const price = document.createElement('div');
        price.innerText = formatVietnameseMoney(item.variants?.[0]?.newPrice || 0);

        const buyBtn = document.createElement('button');
        buyBtn.classList.add('buy_btn');
        buyBtn.setAttribute('data-lang', 'product.addToCart');
        buyBtn.innerText = currentLangCode === 'vi' ? '+ Thêm giỏ' : '+ Add to Cart';
        buyBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            addToCartCallback(item);
        });

        containDesc.append(title, price, buyBtn);
        productCard.append(containImg, containDesc);
        columnWrapper.append(productCard);

        return columnWrapper;
    });

    fragment.append(...htmlProduct);
    row.append(fragment);
    containProduct.innerHTML = ""; 
    containProduct.append(row);
}

// Khởi chạy khi tài liệu HTML đã tải xong
document.addEventListener("DOMContentLoaded", () => {
    const productsShow = products.slice(7, 11);
    renderProduct(productsShow, addToCart, 'container_products');
});

document.querySelector("#buyNow").addEventListener('click',()=>{
    window.location.href = "src/SanPham/sanpham.html"
})

// Check email footer
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