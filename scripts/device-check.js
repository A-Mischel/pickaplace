      window.mobileCheck = function() {
      let check = false;
     (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
};



      let CreateIconToggle = function(){ //creates icon toggle 2d widget and then adds it as a child to the camera object
          let iconToggleButton = document.createElement("a-entity")
          iconToggleButton.setAttribute("geometry", "primitive: plane; height: 1; width: 0.5" );
          iconToggleButton.setAttribute("position", "2 1.7 -2");
          iconToggleButton.setAttribute("material","color: blue");
          iconToggleButton.setAttribute("rotation", "0 -25 0");
          iconToggleButton.setAttribute("icontoggle-extension", "");
          iconToggleButton.setAttribute("class","toggle");
          iconToggleButton.setAttribute("id","toggler");
          let text = document.createElement("a-entity")
          text.setAttribute("text", "value: 2D; align: center");
          text.setAttribute("position", "-0.090 -0.2 0.042");
          text.setAttribute("scale", "4 4 4");
          text.setAttribute("rotation", "0 25 0");
          let text2 = document.createElement("a-entity")
          text2.setAttribute("text", "value: 3D; align: center");
          text2.setAttribute("position", "0.090 -0.4 0.042");
          text2.setAttribute("scale", "4 4 4");
          text2.setAttribute("rotation", "0 25 0");
          let text3 = document.createElement("a-entity")
          text3.setAttribute("text", "value: /; align: center");
          text3.setAttribute("position", "-0.009 -0.325 0.078");
          text3.setAttribute("scale", "4 8 4");
          text3.setAttribute("rotation", "0 25 -30");
          iconToggleButton.appendChild(text);
          iconToggleButton.appendChild(text2);
          iconToggleButton.appendChild(text3);

          document.querySelector("#cam").appendChild(iconToggleButton);
      }

    
    
      
      AFRAME.registerComponent('pc', {
        init: function () {
            
            console.log("registered AS PC");

            
         //  SetCubesPC();

/*
            let MoveCubes = function(){
    

            }

            let MoveShelfColliders = function(){
        
            }

            let SetCubesPC = function(){
                MoveCubes(); //Moving Rigidbody sky cubes (dynamic-body) -> Does it have to be dynamic-body?
                MoveShelfColliders();// Move Shelf Colliders (these hold up the the sky cubes) 
            }

*/
            let mountainCube = document.querySelector("#mountainCube");
            let louvreCube = document.querySelector("#louvreCube");
            louvreCube.removeAttribute(" dynamic-body");
            mountainCube.removeAttribute(" dynamic-body");
            mountainCube.removeAttribute("spawn-position")
            louvreCube.removeAttribute("spawn-position")
            mountainCube.setAttribute("spawn-position","position: -0.50 1.5 -1.42; rotation: 15");
            louvreCube.setAttribute("spawn-position", "position: 0.50 1.5 -1.42; rotation: -15");
            louvreCube.setAttribute("position", "0.50 1.2 -1.42");


            let mshelf = document.querySelector("#shelf");
            let lshelf = document.querySelector("#shelf5");
            lshelf.setAttribute("position", "0.5 1.02 -1.42" );
            mshelf.setAttribute("position", "-0.5 1.02 -1.42" );
            
            
            
            let parent = document.getElementById("Icons2D");
            let Icons3D = document.getElementById("Icons3D");

             let PCIcon = document.createElement('a-plane');
             let PCIcon2 = document.createElement('a-plane');
             let PCIcon3 = document.createElement('a-plane');
             let PCIcon4 = document.createElement('a-plane');
             let PCIcon5 = document.createElement('a-plane');
             
            // PCIcon.setAttribute("id", "ico");

             let ip = document.createElement('a-entity');
             let ip2 = document.createElement('a-entity');
             let ip3 = document.createElement('a-entity');
             let ip4 = document.createElement('a-entity');
             let ip5 = document.createElement('a-entity');

                // SetLayer$ is a bad pattern. setlayer should be one function that takes in a layer
                // click-transition adds a transition to setLayer() ( this is bad...)
            PCIcon.setAttribute("click-transition", "setLayer1()");
            PCIcon2.setAttribute("click-transition", "setLayer2()");
            PCIcon3.setAttribute("click-transition", "setLayer3()");
            PCIcon4.setAttribute("click-transition", "setLayer4()");
            PCIcon5.setAttribute("click-transition", "setLayer5()");

            //add's PC-Icon mixin (contains - position, rotation, scale, onhover event, onexithover event data)
            
            PCIcon.setAttribute("set-pc-icon", "");
            PCIcon2.setAttribute("set-pc-icon", "");
            PCIcon3.setAttribute("set-pc-icon", "");
            PCIcon4.setAttribute("set-pc-icon", "");
            PCIcon5.setAttribute("set-pc-icon", "");
            
            //pc icon set images

            PCIcon.setAttribute("material", "src: #DesertThumb; color: #FFF" );
            PCIcon2.setAttribute("material", "src: #SnowThumb; color: #FFF;" );
            PCIcon3.setAttribute("material", "src: #MountainThumb; color: #FFF" );
            PCIcon4.setAttribute("material", "src: #LouvreThumb; color: #FFF" );
            PCIcon5.setAttribute("material", "src: #SkyThumb; color: #FFF" );
      
          
            
            PCIcon.setAttribute("class", "Icons2D");
            PCIcon2.setAttribute("class", "Icons2D");
            PCIcon3.setAttribute("class", "Icons2D");
            PCIcon4.setAttribute("class", "Icons2D");
            PCIcon5.setAttribute("class", "Icons2D");
            
            //Icon Parents,  (for the animation)
             ip.setAttribute("position", "0 0 -0.34");
             ip2.setAttribute("position", "0 0 -0.35");
             ip2.setAttribute("animation__ico", "property: rotation; to: 0 25 0; dur: 500; delay: 1100; easing: easeOutQuint; autoplay: true");
             ip3.setAttribute("position", "0 0 -0.35");
             ip3.setAttribute("animation__ico", "property: rotation; to: 0 -25 0; dur: 800; delay: 1200; easing: easeOutQuint; autoplay: true");
             ip4.setAttribute("position", "0 0 -0.35");
             ip4.setAttribute("animation__ico", "property: rotation; to: 0 50 0; dur: 500; delay: 1400; easing: easeOutQuint; autoplay: true");
             ip5.setAttribute("position", "0 0 -0.35");
             ip5.setAttribute("animation__ico", "property: rotation; to: 0 -50 0; dur: 500; delay: 1500; easing: easeOutQuint; autoplay: true");

            CreateIconToggle();
              
               
            this.el.addEventListener('go', function () {
                //"add to screenspace"
            
                
                ip.appendChild(PCIcon);
             parent.appendChild(ip);
             ip2.appendChild(PCIcon2);
             parent.appendChild(ip2);
             ip3.appendChild(PCIcon3);
             parent.appendChild(ip3);
             ip4.appendChild(PCIcon4);
             parent.appendChild(ip4);
             ip5.appendChild(PCIcon5);
             parent.appendChild(ip5);

           
                


              
                for(child in Icons3D.children){
//                     Icons3D.children[child].setAttribute("click-icon-3d", child.toString());
                    Icons3D.children[child].setAttribute("click-icon-3d", child.toString());
                   //s Icons3D.children[child].setAttribute("dynamic-body");

                    //el.children[child].classList.add("butts");

                }



            });
     


          
            } 
     });
      
      AFRAME.registerComponent('mobile', {
        init: function () {
        //What do we want to do on mobile...
          console.log("registered AS mobile");    
                      
             var cam = document.getElementById("cam");
             var mobileIcon = document.createElement('a-plane');
             var mobileIcon2 = document.createElement('a-plane');
             var mobileIcon3 = document.createElement('a-plane');
             var mobileIcon4 = document.createElement('a-plane');
             var mobileIcon5 = document.createElement('a-plane');
             
             mobileIcon.setAttribute("position", "-0.6 -1 -2");
             mobileIcon.setAttribute("scale", "0.25 0.25 0.25");
             mobileIcon.setAttribute("onclick", "setLayer1()");
             mobileIcon.setAttribute("class", "Icons2D");
            
            
             mobileIcon2.setAttribute("position", "-0.3 -1 -2");
             mobileIcon2.setAttribute("scale", "0.25 0.25 0.25");
             mobileIcon2.setAttribute("onclick", "setLayer2()");
             mobileIcon2.setAttribute("class", "Icons2D");
            
             mobileIcon3.setAttribute("position", "0 -1 -2");
             mobileIcon3.setAttribute("scale", "0.25 0.25 0.25");
             mobileIcon3.setAttribute("onclick", "setLayer3()");
             mobileIcon3.setAttribute("class", "Icons2D");

             mobileIcon4.setAttribute("position", "0.3 -1 -2");
             mobileIcon4.setAttribute("scale", "0.25 0.25 0.25");
             mobileIcon4.setAttribute("onclick", "setLayer4()");
             mobileIcon4.setAttribute("class", "Icons2D");
            
             mobileIcon5.setAttribute("position", "0.6 -1 -2");
             mobileIcon5.setAttribute("scale", "0.25 0.25 0.25");
             mobileIcon5.setAttribute("onclick", "setLayer5()");
             mobileIcon5.setAttribute("class", "Icons2D");
            
             cam.appendChild(mobileIcon);
             cam.appendChild(mobileIcon2);
             cam.appendChild(mobileIcon3);
             cam.appendChild(mobileIcon4);
             cam.appendChild(mobileIcon5);
            

          
            } 
     });
      
      AFRAME.registerComponent('vr', {
          init: function () {
              console.log("registered as VR");
              let tog = document.getElementById("icontoggle"); //local reference for the toggler -- quick and dirty 
              tog.emit("click");
             
              let Icons3D = document.getElementById("Icons3D");
              
              let parent = document.getElementById("Icons2D");
             
              var PCIcon = document.createElement('a-plane');
              var PCIcon2 = document.createElement('a-plane');
              var PCIcon3 = document.createElement('a-plane');
              var PCIcon4 = document.createElement('a-plane');
              var PCIcon5 = document.createElement('a-plane');

              PCIcon.setAttribute("id", "ico");

              let ip = document.createElement('a-entity');
              let ip2 = document.createElement('a-entity');
              let ip3 = document.createElement('a-entity');
              let ip4 = document.createElement('a-entity');
              let ip5 = document.createElement('a-entity');

              // SetLayer$ is a bad pattern. Setlayer should be one function that takes in a layer
              // click-transition adds a transition to setLayer() ( this is bad...)
              PCIcon.setAttribute("click-transition", "setLayer1()");
              PCIcon2.setAttribute("click-transition", "setLayer2()");
              PCIcon3.setAttribute("click-transition", "setLayer3()");
              PCIcon4.setAttribute("click-transition", "setLayer4()");
              PCIcon5.setAttribute("click-transition", "setLayer5()");

              //add's PC-Icon mixin (contains - position, rotation, scale, onhover event, onexithover event data) 
              PCIcon.setAttribute("set-pc-icon", "");
              PCIcon2.setAttribute("set-pc-icon", "");
              PCIcon3.setAttribute("set-pc-icon", "");
              PCIcon4.setAttribute("set-pc-icon", "");
              PCIcon5.setAttribute("set-pc-icon", "");

              //add to clickable class try setting with mixin...?
              PCIcon.setAttribute("class", "Icons2D");
              PCIcon2.setAttribute("class", "Icons2D");
              PCIcon3.setAttribute("class", "Icons2D");
              PCIcon4.setAttribute("class", "Icons2D");
              PCIcon5.setAttribute("class", "Icons2D");

              // add thumbnails to icons
              PCIcon.setAttribute("material", "src: #DesertThumb; color: #FFF" );
              PCIcon2.setAttribute("material", "src: #SnowThumb; color: #FFF;" );
              PCIcon3.setAttribute("material", "src: #MountainThumb; color: #FFF" );
              PCIcon4.setAttribute("material", "src: #LouvreThumb; color: #FFF" );
              PCIcon5.setAttribute("material", "src: #SkyThumb; color: #FFF" );

              //Icon parents, this is for the animation, again prob not the right way to do this...
              ip.setAttribute("position", "0 0 -0.34");

              ip2.setAttribute("position", "0 0 -0.35");
              ip2.setAttribute("animation__ico", "property: rotation; to: 0 25 0; dur: 500; delay: 1100; easing: easeOutQuint; autoplay: true");
              ip3.setAttribute("position", "0 0 -0.35");
              ip3.setAttribute("animation__ico", "property: rotation; to: 0 -25 0; dur: 800; delay: 1200; easing: easeOutQuint; autoplay: true");
              ip4.setAttribute("position", "0 0 -0.35");
              ip4.setAttribute("animation__ico", "property: rotation; to: 0 50 0; dur: 500; delay: 1400; easing: easeOutQuint; autoplay: true");
              ip5.setAttribute("position", "0 0 -0.35");
              ip5.setAttribute("animation__ico", "property: rotation; to: 0 -50 0; dur: 500; delay: 1500; easing: easeOutQuint; autoplay: true");


              let iconToggleButton = document.createElement("a-entity")
              iconToggleButton.setAttribute("geometry", "primitive: plane; height: 1; width: 0.5" );
              iconToggleButton.setAttribute("position", "2 3 -2");
              iconToggleButton.setAttribute("material","color: blue");
              iconToggleButton.setAttribute("rotation", "0 -25 0");
              iconToggleButton.setAttribute("icontoggle-extension", "");
              iconToggleButton.setAttribute("class","Icons2D");  
              iconToggleButton.setAttribute("id","toggler");
              document.querySelector("a-scene").appendChild(iconToggleButton);
              this.el.addEventListener('go', function () {
                  // document.querySelector("a-scene").appendChild(iconToggleButton);
                  tog.emit("click");
                  ip.appendChild(PCIcon);
                  parent.appendChild(ip);
                  ip2.appendChild(PCIcon2);
                  parent.appendChild(ip2);
                  ip3.appendChild(PCIcon3);
                  parent.appendChild(ip3);
                  ip4.appendChild(PCIcon4);
                  parent.appendChild(ip4);
                  ip5.appendChild(PCIcon5);
                  parent.appendChild(ip5);
                  //ok
                  for(child in Icons3D.children){
                      Icons3D.children[child].setAttribute("click-icon-3d", child.toString());

//                    Icons3D.children[child].setAttribute("click-icon-3d", child.toString());
                      //el.children[child].classList.add("butts");

                  }

              });









          }
      });


      AFRAME.registerComponent('checkdevice', {
        init: function () {
            
          let el = this.el;  
          let mobile = AFRAME.utils.device.isMobile();
          let vr = AFRAME.utils.device.isMobileVR();
          window.mobileCheck();
           
          if(window.mobileCheck() == true){
              el.setAttribute("mobile", '');
              console.log('we are in mobile version2');  
              
            
            } else if(vr){
              console.log('we are in vr version');  
              el.setAttribute("vr", '');
            
              
              
            }
          
          else {
              console.log('we are in PC version');              
              el.setAttribute("pc", '');
              
            } 
          
       } 
     });

      
      
      



      
      
