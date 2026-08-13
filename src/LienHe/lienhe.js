document.addEventListener("DOMContentLoaded", function () {
    // 1. Logic xử lý Form Liên Hệ
    function validateAndSubmitContact() {
        const contactForm = document.getElementById("contactForm");

        if (!contactForm) return;

        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const regexPhone = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); 

            const fullName = document.getElementById("fullName").value.trim();
            const phoneNumber = document.getElementById("phoneNumber").value.trim();
            const emailInput = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!fullName || !phoneNumber || !emailInput || !message) {
                alert("Vui lòng điền đầy đủ tất cả các trường thông tin!");
                return;
            }

            if (!regexEmail.test(emailInput)) {
                alert("Email không đúng định dạng hợp lệ! (Ví dụ đúng: abc@gmail.com)");
                return;
            }

            if (!regexPhone.test(phoneNumber)) {
                alert("Số điện thoại không hợp lệ! Vui lòng nhập đúng số điện thoại di động Việt Nam.");
                return; 
            }

            alert(`Gửi thông tin liên hệ thành công!\nCảm ơn bạn ${fullName}, chúng tôi sẽ phản hồi lại trong thời gian sớm nhất.`);
            
            contactForm.reset();
        });
    }

    // 2. Logic xử lý Đăng ký nhận ưu đãi ở Footer
    function handleFooterSignup() {
        const triggerBtn = document.getElementById("trigger");
        const boxEmail = document.getElementById("box_email");
        const emailError = document.getElementById("email_error");
        const notifyModalEl = document.getElementById("notifyModal");

        if (!triggerBtn || !boxEmail) return;

        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        triggerBtn.addEventListener("click", function () {
            const emailValue = boxEmail.value.trim();

            if (!emailValue) {
                if (emailError) emailError.textContent = "Vui lòng nhập email!";
                return;
            }

            if (!regexEmail.test(emailValue)) {
                if (emailError) emailError.textContent = "Email không hợp lệ!";
                return;
            }

            if (emailError) emailError.textContent = "";

            // Hiển thị Modal Bootstrap
            if (notifyModalEl && window.bootstrap) {
                const modal = new bootstrap.Modal(notifyModalEl);
                modal.show();
            } else {
                alert("Đăng ký thành công! Tài khoản của bạn đang được xét duyệt nhận ưu đãi.");
            }

            boxEmail.value = "";
        });
    }

    // Thực thi các chức năng
    validateAndSubmitContact();
    handleFooterSignup();
});


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
function showUsername(){
    const username = document.getElementById("username");
    const usr = checkLogin();
    username.innerText = usr ? usr : "Đăng Nhập"
    if(usr){
         username.innerText = usr;
    }
    else{
        username.setAttribute('data-lang','action.login');
        username.setAttribute('href','../DangNhap/dangnhap.html')
    }
}
checkEmail();