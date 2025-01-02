const BUGER_BUTTON = document.querySelector(".burger-button");
const SIDE_MENU = document.querySelector(".side-menu");
const SPANS = document.querySelectorAll("span");

BUGER_BUTTON.addEventListener("click", function() {

    SIDE_MENU.classList.toggle("active");

    SPANS.forEach(function(span) {
        span.classList.toggle("active");
    });


});