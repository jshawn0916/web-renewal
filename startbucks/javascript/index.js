
document.querySelectorAll('.city-btn').forEach(function(anchor){
    anchor.onclick = function(e){
        document.querySelectorAll('.city-btn').forEach(function(ele){
            ele.classList.remove('on');
        })
        anchor.classList.add('on');
        e.preventDefault()
        const name = anchor.getAttribute('name')
        const target = document.getElementById(name)
        const to = target.offsetTop
        scrollTo(document.documentElement, to, 2000)
    }
})

const scrollTo = function(element, to, duration){
    let start = element.offsetTop
    // console.log(element)
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
//t = current time
//b = start value
//c = change in value
//d = duration
const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return -c / 2 * (t * (t - 2) - 1) + b
}

