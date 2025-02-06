function open() {
    document.querySelector(".purpose").style.opacity = 1;
}
// setTimeout(open, 1000)

document.querySelector(".cancel").addEventListener("click", function() {

    document.querySelector(".purpose").style.opacity = 0;
    document.querySelector(".purpose").style.zIndex = -1;

})




