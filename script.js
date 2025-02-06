function open() {
    document.querySelector(".purpose").style.opacity = 1;
    document.querySelector(".purpose").style.zIndex = 1;
}
setTimeout(open, 500)

document.querySelector(".cancel").addEventListener("click", function() {

    document.querySelector(".purpose").style.opacity = 0;
    document.querySelector(".purpose").style.zIndex = -1;

    document.querySelector(".say").style.opacity = 1;

})




