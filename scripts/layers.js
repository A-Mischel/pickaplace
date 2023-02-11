// Based on -> https://github.com/alchemz/aframe_webvr_switch_scenes-->
// switching cubemap objects render layer might be a better solution, but no need to re-invent the wheel-->

var cl = "L1";

function setScene() {
    document.getElementById('L1').setAttribute('visible', 'false')
    document.getElementById('L2').setAttribute('visible', 'false')
    document.getElementById('L3').setAttribute('visible', 'false')
    document.getElementById('L4').setAttribute('visible', 'false')
    document.getElementById('L5').setAttribute('visible', 'false')
}

function setLayer1() {
    document.getElementById(cl).setAttribute('visible', 'false')
    document.getElementById('L1').setAttribute('visible', 'true')
    cl = "L1";
}

function setLayer2() {
    document.getElementById(cl).setAttribute('visible', 'false')
    document.getElementById('L2').setAttribute('visible', 'true')
    cl = 'L2';
}

function setLayer3() {
    document.getElementById(cl).setAttribute('visible', 'false')
    document.getElementById('L3').setAttribute('visible', 'true')
    cl = 'L3';
}

function setLayer4() {
    document.getElementById(cl).setAttribute('visible', 'false')
    document.getElementById('L4').setAttribute('visible', 'true')
    cl = 'L4';

}

function setLayer5() {
    document.getElementById(cl).setAttribute('visible', 'false')
    document.getElementById('L5').setAttribute('visible', 'true')
    cl = 'L5';

}

function setLayer6() {
    document.getElementById(cl).setAttribute('visible', 'false')
    document.getElementById('L6').setAttribute('visible', 'true')
    cl = 'L6';

}