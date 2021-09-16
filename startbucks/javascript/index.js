
document.querySelectorAll('.city-btn').forEach(function(anchor){
    anchor.onclick = function(e){
        e.preventDefault()
        const name = anchor.getAttribute('name')
        const target = document.querySelector(name)
        const to = target.offsetTop
        scrollTo(document.documentElement, to, 2000)
    }
})

const scrollTo = function(element, to, duration){
    let start = element.offsetTop
    let change = to - start
    let currentTime = 0
    let increment = 20;

    const animateScroll = function(){
        currentTime += increment;
        const val = easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration){
            setTimeout(animateScroll, increment);
        }
    }

    animateScroll()
}

