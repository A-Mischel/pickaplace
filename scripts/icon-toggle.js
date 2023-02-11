AFRAME.registerComponent("icon-toggle", {
    init: function () {
        var el = this.el;
        var on =  false; //starts with 2D Icons Visibile & 3D Hidden
        // let scene = document.querySelector("#a-scene");


        el.addEventListener("click", function () {
            let Icons2D = document.getElementById("Icons2D");
            let Icons3D = document.getElementById("Icons3D");

            if(on){
                console.log("switch to 3d");
                Icons2D.object3D.visible = false;
                Icons3D.object3D.visible = true;
                Icons3D.emit('enabled'); //makes 3d icons clickable (2d unclickable) via toggle-raycast-selectable script 
                on = false;
            } else {
                console.log("switch to 2d");
                Icons2D.object3D.visible = true;
                Icons3D.object3D.visible = false;
                Icons3D.emit('disabled'); //makes 3d icons unclickable (2d clickable) via toggle-raycast-selectable script 
                on = true;
            }
        });
    },
});