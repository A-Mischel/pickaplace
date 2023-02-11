      AFRAME.registerComponent("controller-toggle", {
        init: function () {
          var el = this.el;
          let on = true;
          let hands = document.getElementById("hands");
          let toggle = document.getElementById("mt")
          el.addEventListener("abuttondown", function () {
          //  mt.emit("click");
            if(on){
              el.parentEl.setAttribute("visible", false);
              el.setAttribute("raycaster", "objects: .default");
              hands.setAttribute("visible", true);
              on = false;
            } else{
              el.parentEl.setAttribute("visible", true);
              el.setAttribute("raycaster", "objects: .Icons2D"); //, .Icons3D
              hands.setAttribute("visible", false);
              on = true;
            }
             
                
                
          });
        },
      });