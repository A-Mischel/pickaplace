  //SourceTemplate --> https://stackoverflow.com/questions/38960058/how-to-listen-to-cameras-world-position-in-a-frame
AFRAME.registerComponent('camera-logger', {

  schema: {
    timestamp: {type: 'int'},
    seconds:   {type: 'int'} // default 0
  },

  log : function () {
    var cameraEl = this.el.sceneEl.camera.el;
    var rotation = cameraEl.getAttribute('rotation');
    var worldPos = new THREE.Vector3();
    worldPos.setFromMatrixPosition(cameraEl.object3D.matrixWorld);
    //this.el.object3D.applyMatrix();
     // console.log(worldPos);
    //this.el.object3D.position.set(worldPos);
    this.el.setAttribute("position", worldPos);
   // console.log( "; Camera Position: (" + worldPos.x.toFixed(2) + ", " + worldPos.y.toFixed(2) + ", " + worldPos.z.toFixed(2) 
        //        + "); Camera Rotation: (" + rotation.x.toFixed(2) + ", " + rotation.y.toFixed(2) + ", " + rotation.z.toFixed(2) + ")");        
  },

  play: function () {
    this.data.timestamp = Date.now();
    this.log();
  },

  tick: function () {  
    if (Date.now() - this.data.timestamp > 100) {
      this.data.timestamp += 100;
      this.log();
    }
  },
});