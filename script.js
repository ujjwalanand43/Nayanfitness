let mouseCursor = document.querySelector('.cursor')
var navLinks = document.querySelectorAll('.sub-menu')
    // var navLinks = document.querySelectorAll('.right-side h2,p')
    // var navLinks = document.querySelectorAll('#section-third h2,p,h3')
var navLinks = document.querySelectorAll('.body h1,h2,p,h3,li,a')

window.addEventListener('mousemove', cursor)



function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";

}

navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow')
        link.classList.remove('hover-link')

    })
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow')
        link.classList.add('hover-link')

    })
})