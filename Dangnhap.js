function showLoginMessage(message, type) {

            const box =
                document.getElementById("loginMessage");

            box.textContent = message;

            box.className =
                "auth-message " + type;

        }


        function loginAccount() {

            const username =
                document
                .getElementById("loginUsername")
                .value
                .trim()
                .toLowerCase();


            const password =
                document
                .getElementById("loginPassword")
                .value;


            const remember =
                document
                .getElementById("rememberLogin")
                .checked;


            if (username === "") {

                showLoginMessage(
                    "Vui lòng nhập email hoặc số điện thoại.",
                    "error"
                );

                return;
            }


            if (password === "") {

                showLoginMessage(
                    "Vui lòng nhập mật khẩu.",
                    "error"
                );

                return;
            }


            const savedAccount =
                localStorage.getItem(
                    "mobileShopAccount"
                );


            if (!savedAccount) {

                showLoginMessage(
                    "Bạn chưa có tài khoản. Vui lòng đăng ký trước.",
                    "error"
                );

                return;
            }


            let account;


            try {

                account =
                    JSON.parse(savedAccount);

            } catch (error) {

                showLoginMessage(
                    "Dữ liệu tài khoản bị lỗi.",
                    "error"
                );

                return;
            }


            const correctUsername =
                username === account.email.toLowerCase()
                ||
                username === account.phone;


            if (!correctUsername) {

                showLoginMessage(
                    "Email hoặc số điện thoại không chính xác.",
                    "error"
                );

                return;
            }


            if (password !== account.password) {

                showLoginMessage(
                    "Mật khẩu không chính xác.",
                    "error"
                );

                return;
            }


            localStorage.setItem(
                "mobileShopLoggedIn",
                "true"
            );


            localStorage.setItem(
                "mobileShopCurrentUser",
                JSON.stringify({

                    fullName:
                        account.fullName,

                    email:
                        account.email,

                    phone:
                        account.phone,

                    provider:
                        "local"

                })
            );


            if (remember) {

                localStorage.setItem(
                    "mobileShopRemember",
                    "true"
                );

            } else {

                localStorage.removeItem(
                    "mobileShopRemember"
                );

            }


            showLoginMessage(
                "Đăng nhập thành công! Đang vào trang bán hàng...",
                "success"
            );


            setTimeout(function () {

                window.location.href =
                    "TrangChu.html";

            }, 1000);

        }


        function togglePassword() {

            const input =
                document.getElementById(
                    "loginPassword"
                );


            const icon =
                document.getElementById(
                    "loginPasswordIcon"
                );


            if (input.type === "password") {

                input.type = "text";

                icon.className =
                    "bi bi-eye-slash";

            } else {

                input.type = "password";

                icon.className =
                    "bi bi-eye";

            }

        }


        function forgotPassword(event) {

            event.preventDefault();

            showLoginMessage(
                "Chức năng quên mật khẩu chưa được kết nối.",
                "error"
            );

        }


        

        function handleGoogleLogin(response) {

            if (
                !response ||
                !response.credential
            ) {

                showLoginMessage(
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
                    provider: "google"
                })
            );


            showLoginMessage(
                "Đăng nhập Google thành công!",
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
                        handleGoogleLogin

                });


                google.accounts.id.renderButton(

                    document.getElementById(
                        "googleLoginButton"
                    ),

                    {

                        theme: "outline",

                        size: "large",

                        text: "signin_with",

                        shape: "rectangular",

                        width: 350

                    }

                );

            }
        );


        

        document.addEventListener(
            "keydown",
            function(event) {

                if (event.key === "Enter") {

                    loginAccount();

                }

            }
        );