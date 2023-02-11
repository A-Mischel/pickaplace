
    AFRAME.registerComponent("out-of-bounds-collision", {

        init: function () {
            let el = this.el;


            el.addEventListener('collisions',  (e)=> {

                e.detail.els[0].emit("respawn");

            });
        },
    });
