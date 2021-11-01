
//menu-btn 클릭시 스크롤 이동 효과

document.querySelectorAll('a[href^="#"]').forEach(function(elem){
    elem.addEventListener('click', function(e){
        e.preventDefault();
        for(let i = 0; i < document.getElementsByClassName('menu-btn').length; i++){
            document.getElementsByClassName('menu-btn')[i].classList.remove('on')
        }
        elem.classList.add('on');
        document.querySelector(elem.getAttribute('href')).scrollIntoView({     
            behavior: 'smooth',
            offsetTop: 20
        });
    });
});

//패럴렉스 스크롤
let basic_scroll = document.querySelector('html').scrollTop //현재위치값
let basic_height = window.innerHeight //브라우저 높이
let basic_section_num = basic_scroll / basic_height;
document.getElementById('menu'+(basic_section_num + 1)).click();//페이지에 맞는 menu버튼 클릭

let event1 = true;
let lastPage = document.getElementsByClassName("content-box").length - 1;
let page = basic_section_num;
window.addEventListener("wheel", function(e){
    if(!event1) { return false; }
    event1 = false;
    if(e.deltaY > 0){
        if(page == lastPage) {
            event1 = true 
            return
        };
        page++;
        
    }else if(e.deltaY < 0){
        if(page == 0) {
            event1 = true 
            return;
        }
        page--;
    }
    for(let i = 0; i < document.getElementsByClassName("menu-btn").length; i++){
        document.getElementsByClassName("menu-btn")[i].classList.remove("on") 
    }
    document.getElementsByClassName("menu-btn")[page].classList.add("on");
    let box1_top = document.getElementsByClassName("content-box")[page].offsetTop;
    window.scrollTo({top: box1_top, behavior: "smooth"})
    setTimeout(function(){
       event1 = true 
    },400)
    // var posTop = (page-1) * $(window).height();

    // htmlBody.animate({scrollTop : posTop});
});
//새로고침시, 스크롤 맨위로
window.onload = function(){
//   document.getElementById('menu1').click();
}