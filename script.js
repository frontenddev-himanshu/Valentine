let pngPage = document.querySelector(".pngWrap");
let clr = document.querySelector(".clear-btn");

setTimeout(() => {
    pngPage.style.opacity = 1
}, 500);

clr.addEventListener("click", function () {
    pngPage.style.opacity = 0;
    pngPage.style.zIndex = -1;
})


