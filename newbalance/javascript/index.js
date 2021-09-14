//이미지 hover
function img_change(_this,num){
    const origin_img = _this.firstChild.nextSibling;
    const sub_img = _this.lastChild.previousSibling;
    if(num === 1){
        origin_img.style.opacity = 0
        sub_img.style.opacity = 1
    }else{
        origin_img.style.opacity = 1
        sub_img.style.opacity = 0        
    }
}

//header 버튼 토글
const menuToggle = document.querySelector('.menu-trigger');
const headerMenu = document.querySelector('.header-menu-box');

menuToggle.addEventListener('click', function(){
    menuToggle.classList.toggle('toggle-active');
    headerMenu.classList.toggle('active');
});
