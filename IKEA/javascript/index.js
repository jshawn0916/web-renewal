
//header 버튼 토글
const menuToggle = document.querySelector('.menu-trigger');
const sideToggle = document.querySelector('.side-menu');

document.querySelector('.ham-btn').addEventListener('click', function(){
    sideToggle.classList.toggle('toggle-active');
});
document.querySelector('.sub-menu-btn').addEventListener('click', function(){
    sideToggle.classList.toggle('toggle-active');
})

//top버튼
let topBtn = document.querySelector('.top-btn');
window.addEventListener('scroll', function(){
    let Y = document.documentElement.scrollTop;
    if(Y > 90){
        topBtn.classList.add('on');
    }else{
        topBtn.classList.remove('on');
    }
});
topBtn.addEventListener('click', function(){
    window.scrollTo({top:0, behavior :'smooth'})
});