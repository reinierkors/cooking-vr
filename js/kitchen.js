window.onload = function () {
    var knife = document.getElementById("knife");
    var rawchicken = document.getElementById("rawchicken");
    var rawchickenleg = document.getElementById("rawchickenleg");
    var camera = document.getElementById("camera");
    var knifeEquiped = false;
    var rawchickenlegEquiped = false;

    knife.addEventListener("mouseenter", function () {
        camera.appendChild(this);
        knifeEquiped = true;
        this.setAttribute("position", "0.3 -0.5 -1");
        this.setAttribute('rotation', '0 102 90');
    });

    rawchicken.addEventListener("mouseenter", function () {
        if (knifeEquiped == true) {
            this.parentNode.removeChild(this);
            rawchickenleg.setAttribute('visible', true);
        //   camera.appendChild(this);
        }
    });

    rawchickenleg.addEventListener("mouseenter", function () {
        if (knifeEquiped == true) {
            knife.parentNode.removeChild(knife); 
            camera.appendChild(rawchickenleg);
            rawchickenlegEquiped = true;
        }
    });

    oven.addEventListener("mouseenter", function() {
        if (rawchickenlegEquiped == true) {
            rawchickenleg.parentNode.removeChild(rawchickenleg);
        }
    });
};

