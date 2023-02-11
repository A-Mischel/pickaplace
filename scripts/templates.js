//goal was to make it easier to create and assign objects via mixins -- turns out it wasn't necessary
AFRAME.registerComponent('set-pc-icon', {
    init: function () {
       
        this.el.setAttribute("mixin", "PC-Icon");
        
        
    }
});


AFRAME.registerComponent('set-ip', {
    init: function () {

       console.log("set");

    }
});