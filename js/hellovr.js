window.onload = function() {
    var bol = document.getElementById("bol");
    var hello = document.getElementById("hello");
    var girl = document.getElementById("girl");

    bol.addEventListener("mouseenter", function() {
        this.setAttribute("color", "green");
    });

    bol.addEventListener("mouseleave", function() {
        this.setAttribute("color", "#FFF");
    });

    girl.addEventListener("click", function() {
        console.log('enter');
        hello.setAttribute("opacity", "1");
    });
};

