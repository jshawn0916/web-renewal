
let htmlBody = document.getElementsByTagName('html');
let lastPage = document.getElementsByClassName('content-box');
let beforeScroll = document.documentElement.scrollTop;

let num = 1;
window.addEventListener('wheel',function(e){
    console.log(e.deltaY)
    if(e.deltaY > 0){
        
    }else if(e.deltaY < 0){

    }
})

// let htmlBody = $('html');
// let page = 1;
// let lastPage = $('.content-box').length;

// htmlBody.animate({scrollTop:0},10);

// $(window).on("wheel", function(e){
 
// 	if(htmlBody.is(":animated")) return;
 
// 	if(e.originalEvent.deltaY > 0){
// 		// if(page== lastPage) return;
 
// 		// page++;
// 	}else if(e.originalEvent.deltaY < 0){
// 		// if(page == 1) return;
 
// 		// page--;
// 	}
// 	var posTop = (page-1) * $(window).height();
 
// 	htmlBody.animate({scrollTop : posTop});
 
// });


