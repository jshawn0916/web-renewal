
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

//새로고침시, 스크롤 맨위로
let scroll_stay = false;
let _page = document.querySelectorAll('.content-box');
let _btn = document.querySelectorAll('.menu-btn');
let _count = Math.round(document.documentElement.scrollTop / window.innerHeight);
let topIndex = [];
document.getElementById('menu'+_count).classList.add('on');

_page.forEach(function(ele){
    topIndex.push(ele.offsetTop);
});
    window.addEventListener('mousewheel', function(e) {
        if(scroll_stay){
            console.log('stay' + _count);
            return;
        }
        scroll_stay = true;
        
        document.getElementById('menu'+_count).classList.remove('on');
        if(e.wheelDelta > 0 && _count > 0){
            console.log(11111)
            _count--;
            window.scrollTo({top : topIndex[_count], behavior:'smooth'})
            document.getElementById('menu'+_count).classList.add('on');
            console.log('up'+_count)
            //지금위치에서 한칸 위로
        }else if(e.wheelDelta < 0 && _count < 4){
            _count++;
            window.scrollTo({top : topIndex[_count], behavior:'smooth'})
            document.getElementById('menu'+_count).classList.add('on');
            console.log('down'+_count);
            //지금위치에서 한칸 아래로
        }else{
            console.log('0보다 작거나 4보다 크다');
            document.getElementById('menu'+_count).classList.add('on');
            scroll_stay = false;
            return;
        }
       
        
        // console.log(scroll_stay)
        setTimeout(function(){
            scroll_stay = false;
            console.log(2222222)
        },500);
    });


// window.onload = function(){
//     console.log(document.documentElement.scrollTop, window.innerHeight)
//     setTimeout(function(){
//         document.getElementById('menu0').click()
//     },300)
// };