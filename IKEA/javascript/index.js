
//header 버튼 토글
const menuToggle = document.querySelector('.menu-trigger');

document.querySelector('.ham-btn').addEventListener('click', function(){
    menuToggle.classList.toggle('toggle-active');
});

//top버튼
let topBtn = document.querySelector('.top-btn');
window.addEventListener('scroll', function(){
    console.log(window.scrollTop)
    // if(this.screenY > 200){
    //     console.log(1111)
    //     // topBtn.classList.add('on');
    // }else{
    //     console.log(22222)
    //     // topBtn.classList.remove('on');
    // }
})