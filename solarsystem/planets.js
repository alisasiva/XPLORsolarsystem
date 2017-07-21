//earth
function move1() {
    var camera=document.getElementById('cameraMove')
    camera.setAttribute('position', '15 -2 5')
    camera.setAttribute('rotation', '0 50 0')
}

//mercury
function move2() {
    var camera=document.getElementById('cameraMove')
    camera.setAttribute('position', '4 -2 5')
    camera.setAttribute('rotation', '0 -40 0')
}

//venus
function move3() {
    var camera=document.getElementById('cameraMove')
    camera.setAttribute('position', '10 -2 5')
    camera.setAttribute('rotation', '0 10 0')
}

//mars
function move4() {
    var camera=document.getElementById('cameraMove')
    camera.setAttribute('position', '20 -2 5')
    camera.setAttribute('rotation', '0 92 0')
}

//jupiter
function move5() {
    var camera=document.getElementById('cameraMove')
    camera.setAttribute('position', '51 -5 30')
    camera.setAttribute('rotation', '0 180 0')
}

//saturn
function move6() {
    var camera=document.getElementById('cameraMove')
    camera.setAttribute('position', '100 -1.5 30')
    camera.setAttribute('rotation', '0 235 0')
}

//uranus
function move7(){
    var camera=document.getElementById('cameraMove')
    camera.setAttribute('position', '192 -4 20')
    camera.setAttribute('rotation', '0 305 0')
}

//neptune
function move8() {
    var camera=document.getElementById('cameraMove')
    camera.setAttribute('position', '302.5 -3 15')
    camera.setAttribute('rotation', '0 30 0')
}

//pluto
function move9() {
    var camera=document.getElementById('cameraMove')
    camera.setAttribute('position', '320.3 -2 3')
    camera.setAttribute('rotation', '0 82.5 0')
}

//mercuryText
function mercury2appear() {
    var mert=document.getElementById('mercuryTitle')
    mert.setAttribute("visible", "true")
    var merb=document.getElementById('mercuryText')
    merb.setAttribute("visible", "true")
}

//venusText
function venus2appear() {
    var vent=document.getElementById('venusTitle')
    vent.setAttribute("visible", "true")
    var venb=document.getElementById('venusText')
    venb.setAttribute("visible", "true")
}

//earthText
function earth2appear() {
    var eart=document.getElementById('earthTitle')
    eart.setAttribute("visible", "true")
    var earb=document.getElementById('earthText')
    earb.setAttribute("visible", "true")
}

//marsText
function mars2appear() {
    var marst=document.getElementById('marsTitle')
    marst.setAttribute("visible", "true")
    var marsb=document.getElementById('marsText')
    marsb.setAttribute("visible", "true")
}

//jupiterText
function jupiter2appear() {
    var jupt=document.getElementById('jupiterTitle')
    jupt.setAttribute("visible", "true")
    var jupb=document.getElementById('jupiterText')
    jupb.setAttribute("visible", "true")
}

//saturnText
function saturn2appear() {
    var satt=document.getElementById('saturnTitle')
    satt.setAttribute("visible", "true")
    var satb=document.getElementById('saturnText')
    satb.setAttribute("visible", "true")
}

//uranusText
function uranus2appear() {
    var urt=document.getElementById('uranusTitle')
    urt.setAttribute("visible", "true")
    var urb=document.getElementById('uranusText')
    urb.setAttribute("visible", "true")
}

//neptuneText
function neptune2appear() {
    var net=document.getElementById('neptuneTitle')
    net.setAttribute("visible", "true")
    var neb=document.getElementById('neptuneText')
    neb.setAttribute("visible", "true")
}

//plutoText
function pluto2appear() {
    var plut=document.getElementById('plutoTitle')
    plut.setAttribute("visible", "true")
    var plub=document.getElementById('plutoText')
    plub.setAttribute("visible", "true")
}

// //marsClick
// function clickMe() {
//     console.log("hit")
//     var sky=document.getElementById('marsSurface')
//     console.log(sky)
//     sky.setAttribute('src', '#marsBackground')
// }
