

    AFRAME.registerComponent("display-welcome-text", {
    init: function () {
        
        
    let scene =  this.el
    let text = document.getElementById("text")
    let text2 = document.getElementById("text2")
    
    
        /* displays welcome text "animation"/
        /* Maybe refactor using a-frame animation-timeline component */
        
        
    scene.addEventListener("loaded", function () {
        displayText()
    });
 
        
    async function displayText() {
    await sleep(1500)
    text.setAttribute("text", "value:pick a place")
    await sleep(1000)
    text.setAttribute("text", "value:...anyplace.")
    await sleep(1000)
    text.setAttribute("text", "value: Pick-A-Place.")
    text2.setAttribute("visible", true)//ugly 
    text.emit("set") //ugly 
     }
     
     
    function sleep(ms)
    {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    
    
    
   },
});
