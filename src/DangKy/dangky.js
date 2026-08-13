function showRegisterMessage(message, type) {

            const box =
                document.getElementById(
                    "registerMessage"
                );

            box.textContent = message;

            box.className =
                "auth-message " + type;

        }


        function isValidEmail(email) {

            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                email
            );

        }


        function isValidPhone(phone) {

            return /^0[0-9]{9}$/.test(
                phone
            );

        }


        function registerAccount() {


            const name =
                document
                .getElementById("registerName")
                .value
                .trim();


            const phone =
                document
                .getElementById("registerPhone")
                .value
                .trim();


            const email =
                document
                .getElementById("registerEmail")
                .value
                .trim()
                .toLowerCase();


            const password =
                document
                .getElementById("registerPassword")
                .value;


            const confirmPassword =
                document
                .getElementById("registerConfirmPassword")
                .value;


            const agreeTerms =
                document
                .getElementById("agreeTerms")
                .checked;



            if (name === "") {

                showRegisterMessage(
                    "Vui lòng nhập họ và tên.",
                    "error"
                );

                return;

            }


            if (!isValidPhone(phone)) {

                showRegisterMessage(
                    "Số điện thoại phải gồm 10 số và bắt đầu bằng 0.",
                    "error"
                );

                return;

            }


            if (!isValidEmail(email)) {

                showRegisterMessage(
                    "Email không đúng định dạng.",
                    "error"
                );

                return;

            }


            if (password.length < 6) {

                showRegisterMessage(
                    "Mật khẩu phải có ít nhất 6 ký tự.",
                    "error"
                );

                return;

            }


            if (password !== confirmPassword) {

                showRegisterMessage(
                    "Mật khẩu xác nhận không giống nhau.",
                    "error"
                );

                return;

            }


            if (!agreeTerms) {

                showRegisterMessage(
                    "Vui lòng đồng ý với điều khoản sử dụng.",
                    "error"
                );

                return;

            }



            

            const oldAccount =
                localStorage.getItem(
                    "mobileShopAccount"
                );


            if (oldAccount) {

                try {

                    const account =
                        JSON.parse(oldAccount);


                    if (
                        account.email ===
                        email
                    ) {

                        showRegisterMessage(
                            "Email này đã được đăng ký.",
                            "error"
                        );

                        return;

                    }


                    if (
                        account.phone ===
                        phone
                    ) {

                        showRegisterMessage(
                            "Số điện thoại này đã được đăng ký.",
                            "error"
                        );

                        return;

                    }

                }
                catch (error) {

                    localStorage.removeItem(
                        "mobileShopAccount"
                    );

                }

            }



            

            const account = {

                fullName:
                    name,

                phone:
                    phone,

                email:
                    email,

                password:
                    password,

                createdAt:
                    new Date().toISOString()

            };


            localStorage.setItem(
                "mobileShopAccount",
                JSON.stringify(account)
            );


            localStorage.removeItem(
                "mobileShopLoggedIn"
            );


            localStorage.removeItem(
                "mobileShopCurrentUser"
            );


            showRegisterMessage(
                "Tạo tài khoản thành công! Đang chuyển sang đăng nhập...",
                "success"
            );


            setTimeout(function () {

                window.location.href =
                    "Dangnhap.html";

            }, 1200);

        }



       

        function togglePassword(
            inputId,
            iconId
        ) {


            const input =
                document.getElementById(
                    inputId
                );


            const icon =
                document.getElementById(
                    iconId
                );


            if (
                input.type ===
                "password"
            ) {

                input.type =
                    "text";

                icon.className =
                    "bi bi-eye-slash";

            }
            else {

                input.type =
                    "password";

                icon.className =
                    "bi bi-eye";

            }

        }



    

        function handleGoogleRegister(
            response
        ) {


            if (
                !response ||
                !response.credential
            ) {

                showRegisterMessage(
                    "Không nhận được thông tin từ Google.",
                    "error"
                );

                return;

            }


            localStorage.setItem(
                "mobileShopGoogleCredential",
                response.credential
            );


            localStorage.setItem(
                "mobileShopLoggedIn",
                "true"
            );


            localStorage.setItem(
                "mobileShopCurrentUser",
                JSON.stringify({

                    provider:
                        "google"

                })
            );


            showRegisterMessage(
                "Đăng ký Google thành công!",
                "success"
            );


            setTimeout(function () {

                window.location.href =
                    "TrangChu.html";

            }, 1000);

        }



        

        window.addEventListener(
            "load",
            function () {


                const GOOGLE_CLIENT_ID =
                    "YOUR_GOOGLE_CLIENT_ID";


                if (
                    GOOGLE_CLIENT_ID ===
                    "YOUR_GOOGLE_CLIENT_ID"
                ) {

                    console.warn(
                        "Google Client ID chưa được cấu hình."
                    );

                    return;

                }


                google.accounts.id.initialize({

                    client_id:
                        GOOGLE_CLIENT_ID,

                    callback:
                        handleGoogleRegister

                });


                google.accounts.id.renderButton(

                    document.getElementById(
                        "googleRegisterButton"
                    ),

                    {

                        theme:
                            "outline",

                        size:
                            "large",

                        text:
                            "signup_with",

                        shape:
                            "rectangular",

                        width:
                            350

                    }

                );

            }
        );


       

        document.addEventListener(
            "keydown",
            function(event) {

                if (
                    event.key ===
                    "Enter"
                ) {

                    registerAccount();

                }

            }
        );