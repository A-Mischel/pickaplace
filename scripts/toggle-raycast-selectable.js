// This component adds/removes "clickable" classes from scene icons ("clickable" classes = classes which interact with our cursor)
AFRAME.registerComponent('toggle-raycast-selectable', {
    init: function () {

        const Icons3D = document.querySelectorAll(".Icons3D"); //2D icons are created scene - effeciently grab 2d icons if performance is becoming an issue
        let el = this.el;
        let scene = document.querySelector(("a-scene"))
        let toggle = document.querySelector("#icontoggle");


        scene.addEventListener("bounce", function () {
            //  let Icons2D = document.getElementsByClassName("Icons2D");
            //  console.log(Icons2D);
            console.log("updated 2ds")
            //toggle.emit("click");
        });


        el.addEventListener('enabled', function () {
            //     let Icons2D = document.querySelector(".Icons2D"); 
            let Icons2D = document.getElementsByTagName("a-plane")

            for (let i = 0; i < Icons2D.length; i++) {
                let icon2D = Icons2D[i];
                icon2D.removeAttribute("class", "Icons2D")
            }
            // console.log("click disabled");

            for (let i = 0; i < Icons3D.length; i++) {
                let icon3D = Icons3D[i];
                icon3D.setAttribute("class", "Icons3D")
            }
            // console.log("cubes enabled");

        });


        el.addEventListener('disabled', function () {
            //   let Icons2D = document.querySelector(".Icons2D");
            let Icons2D = document.getElementsByTagName("a-plane") ;

            for (let i = 0; i < Icons2D.length; i++) {
                let icon2D = Icons2D[i];
                icon2D.setAttribute("class", "Icons2D")
            }

            for (let i = 0; i < Icons3D.length; i++) {
                let icon3D = Icons3D[i];
                icon3D.removeAttribute("class", "Icons3D")
            }




        });

    }
});