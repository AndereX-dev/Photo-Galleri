window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");

    preloader.classList.add("preload--hidden");

    preloader.addEventListener("transitionend", () => {
    document.body.removeChild(preloader)
    })
});