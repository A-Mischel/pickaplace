//shhh lets not talk about this
AFRAME.registerComponent("dumb-loading", {
    init: function () {

        //brute force caching cubemaps via cacheCubeMaps + "clicking" icontoggle entity via cacheIcons
        //manually executing functions to avoid lag spikes

        let icontoggle = document.getElementById("icontoggle"); //lets us switch between 2d/3d icons via the icon-toggle component
        const funcs = [setScene, setLayer1, setLayer2, setLayer3, setLayer4, setLayer5, setLayer6]; //functions are defined in ./scripts/loading.js, 

        let scene = this.el;

        function sleep(ms)
        {
            return new Promise(resolve => setTimeout(resolve, ms));
        }


        async function cacheIcons () {
            await sleep(500);
            icontoggle.emit("click");
            console.log("cached?")
        }


        scene.addEventListener('loaded', function () {
            async function cacheCubeMaps () {
                for (var i = 0; i < funcs.length; i++) {
                    funcs[i]();
                    await sleep(500);
                }
                document.getElementById("transitionSphere").emit("fadeinscene");                                 /* fades in scene */
                document.getElementById("cam").setAttribute("look-controls-enabled", true);    /* enables mouse/ screen movement (A-Frame look-controls) */
                scene.setAttribute("vr-mode-ui", "enabled: true");                                                       /* enables vr-mode */
                scene.emit("go");
                scene.emit("set");  /* triggers start of scene, "go" event listeners set in device-check component */
            }

            cacheCubeMaps();             /* manually caching cubemaps + STARTS THE SCENE AFTER COMPLETION */
            cacheIcons();              /* manually caching emitting click to icon-toggle */

        })
    },
}); 