window.onload = function () {
    var knife = document.getElementById("knife");
    var rawchicken = document.getElementById("rawchicken");
    var rawchickenleg = document.getElementById("rawchickenleg");
    var camera = document.getElementById("camera");
    var oven = document.getElementById("oven");
    var cookedchicken = document.getElementById("cookedchicken");
    var stap1 = document.getElementById("stap1");
    var knifeEquiped = false;
    var rawchickenlegEquiped = false;
    var chickenReady = false;
    
    knife.addEventListener("mouseenter", function () {
        camera.appendChild(this);
        knifeEquiped = true;
        this.setAttribute("position", "0.3 -0.5 -1");
        this.setAttribute('rotation', '0 102 90');
    });

    rawchicken.addEventListener("mouseenter", function () {
        if (knifeEquiped == true) {
            knife.emit('cut');
            knife.components.sound.playSound();
            rawchickenleg.setAttribute('visible', true);
            stap1.setAttribute('text', 'width:3.5;color:#00ff40;value:Stap 1: Pak het mes en snij de kip in stukjes;side:double;letterSpacing:1.5');

            setTimeout(() => {  
                this.parentNode.removeChild(this);
            }, 601);
        }
    });

    rawchickenleg.addEventListener("mouseenter", function () {
        if (knifeEquiped == true) {
            knife.parentNode.removeChild(knife); 
            camera.appendChild(rawchickenleg);
            rawchickenleg.setAttribute('visible', true);
            rawchickenleg.setAttribute("position", "0.3 -0.5 -1");
            rawchickenlegEquiped = true;
        }
    });

    oven.addEventListener("mouseenter", function() {
        if (rawchickenlegEquiped == true) {
            rawchickenleg.parentNode.removeChild(rawchickenleg);
            oven.components.sound.playSound();
            rawchickenlegEquiped = false;
            setTimeout(() => {
                oven.setAttribute('sound', 'src: #bingSound');
                oven.components.sound.playSound();
                chickenReady = true;
            }, 11000);
        } else if (chickenReady == true) {
            cookedchicken.setAttribute('visible', true);
        }
    });
};

