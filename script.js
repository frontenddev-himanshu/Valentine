AOS.init();

function open() {
    document.querySelector(".purpose").style.opacity = 1;
    document.querySelector(".purpose").style.zIndex = 11111;
}
setTimeout(open, 500)

document.querySelector(".cancel").addEventListener("click", function() {

    document.querySelector(".purpose").style.opacity = 0;
    document.querySelector(".purpose").style.zIndex = -1;

    document.querySelector(".say").style.opacity = 1;
    document.querySelector(".purpose-valen").style.opacity = 1;
    document.querySelector(".shayri").style.opacity = 1;
    document.querySelector(".next").style.opacity = 1;

})




