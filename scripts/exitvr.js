            AFRAME.registerComponent('exitvr', {
                schema: {                    
                },
                init: function() {
                let scene = document.querySelector("a-scene"); 
                this.el.addEventListener('click',  function () {
              //  console.log(scene);       
              //  test with headset
                scene.exitVR();
                });
                }
              
              
            });