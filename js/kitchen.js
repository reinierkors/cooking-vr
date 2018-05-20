window.onload = function () {
    var knife = document.getElementById("knife");
    var caketin = document.getElementById("caketin");
    var camera = document.getElementById("camera");

    knife.addEventListener("mouseenter", function () {
        camera.appendChild(this);
/*         this.setAttribute('position', '0 0 0');
        this.setAttribute('rotation', '0 0 0'); */
    });
};

