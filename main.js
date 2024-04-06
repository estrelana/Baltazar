window.onload = function () {
    document.querySelector(".menuMobile").addEventListener("click", function () {
        console.log("oo")
        if (document.querySelector("nav").style.display == "flex") {
            document.querySelector("nav").style.display = "none";
        } else {
            document.querySelector("nav").style.display = "flex";
        }
    });
};