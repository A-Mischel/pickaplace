      AFRAME.registerComponent("color-sky", {
          schema: {
              layer : {type: 'string', default: ""},
              delay: { type: "bool", default: false},

          }
          ,
          init: function () {
            let el = this.el;
            let delay = this.data.delay;
          
              this.el.addEventListener('change', function () {
                    delay = true;

              });     
              
            let parent = this.el.parentEl;
            let setNewLayer = "setLayer" + this.data.layer + "()";
          
              function resolveAfter2Seconds() {
                  return new Promise(resolve => {
                      setTimeout(() => {
                          resolve('resolved');
                          parent.emit("spawn");
                      }, 500);
                  });
                  
              }

              async function asyncCall() {
                  const result = await resolveAfter2Seconds();

              }

          
          el.addEventListener('set', function () {
            
              eval(setNewLayer); //Terrible practice          
              if(delay){
                  console.log("delayed");

                  asyncCall();
                  
              }
              else
              {
                  parent.emit("spawn");
                  
              }


          });

          el.addEventListener('respawn', function () {

              parent.emit("spawn");
         
          });
        },
      });