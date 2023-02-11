
AFRAME.registerComponent("set-path", {
    schema: {
        position: {type: 'string', default: "0, 0, 0"},
        rotation:{ type: "int", default: 0}

    }
    ,
    init: function () {
        let el = this.el;


        el.addEventListener('click', function () {
            console.log("set-path...")
            
             el.setAttribute("alongpath", "curve: #cameraPath; dur: 1500; loop: false" );
        });
    },
});