const menu = document.getElementById('navbar');
    const overlay = document.getElementById('overlay-placeholder');
function openMenu(menu,overlay){
    const hamberger = document.getElementById('header_hamberger')
    hamberger.addEventListener('click',()=>{
        menu.classList.add('translate-0-x');
        overlay.classList.add('overlay')
    })
    
}

function closeMenu(menu,overlay){
    const btnClose = document.querySelector('.nav_close');
    btnClose.addEventListener('click',()=>{
        menu.classList.remove('translate-0-x');
        menu.classList.add('translate-full-x');
        overlay.classList.remove('overlay')
    })
    
}

function closeOverlay(menu,overlay){
    overlay.addEventListener('click',()=>{
        menu.classList.remove('translate-0-x');
        menu.classList.add('translate-full-x');
        overlay.classList.remove('overlay')
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
        username.setAttribute('href','/src/Dangnhap.html')
    }
}

showUsername()
openMenu(menu,overlay);
closeMenu(menu,overlay);
closeOverlay(menu,overlay)