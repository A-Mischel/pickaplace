//changes scene. Attached to 2dIcons VIA device-check
AFRAME.registerComponent('click-transition', { 
    schema: {message: {type: 'string', default: ''}},
    
    init: function () {
        
        let sphere = document.getElementById("transitionSphere");
        let func = this.data;
        
        
        
        this.el.addEventListener('click', function () {
            const timer = ms => new Promise(res => setTimeout(res, ms))
            
            async function switchScene () {
                sphere.emit('transition');
                await timer(400);
                eval(func);
            }
            
            switchScene();
            
        });
    },
});
  