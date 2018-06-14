window.onload = function() {
    var blender = document.getElementById("blender");
    var blok = document.getElementById("cube");
    var camera = document.getElementById("camera");

    blender.addEventListener("mouseenter", function() {
        camera.appendChild(blender);
    });

    blok.addEventListener("mouseenter", function() {
        if (blender !== undefined) {
            blok.parentNode.removeChild(blok);
        }
    });
};

