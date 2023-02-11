AFRAME.registerComponent('click-icon-3d', {
    schema: {type: 'string', default: ''}
    ,
    init: function () {
        let el = this.el;
        let data = this.data;
        let target = document.querySelector("#p" + data);

        el.addEventListener('click', function (evt) {
            let cursor = evt.detail.cursorEl.getAttribute("class");
            if(cursor != "raycasting") return;
            target.setAttribute("position", "0 1.3 0");
            el.removeAttribute("alongpath");
            el.removeAttribute("dynamic-body");
            el.emit("animate");
            let string = "curve: #path" + data + "; dur: 1500; loop: false; easing: easeInCirc"
            el.setAttribute("alongpath", string);
            
        });
    }
});
