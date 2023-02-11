// with this only one object toggles icons. Not sure if this is a good or necessary design pattern...
AFRAME.registerComponent('icontoggle-extension', {
    schema: {
    },
    init: function() {
        let icontoggle = document.getElementById("icontoggle")
        this.el.addEventListener('click', function () {
           icontoggle.emit("click");
        });

    }


});

