AFRAME.registerComponent('vrtoggle', {
                schema: {                    
                },
                init: function() {
                    this.el.addEventListener('enter-vr', function () {
                        console.log("in vr");
                        //create exit vr button
                    });

                    this.el.addEventListener('exit-vr', function () {
                        console.log("exited vr");
                        //delete exit vr button
                    });

                }


                });

