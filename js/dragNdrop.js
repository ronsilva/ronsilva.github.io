// JavaScript Document
var tformTemp = "*";

function startDrag(e) {
// determine event object
if (!e) {
    var e = window.event;
}
if(e.preventDefault) e.preventDefault();
// IE uses srcElement, others use target
targ = e.target ? e.target : e.srcElement;
if (targ.name != 'dragme') {return};
// calculate event X, Y coordinates
    offsetX = e.clientX;
    offsetY = e.clientY;
// assign default values for top and left properties
if(!targ.style.left) { targ.style.left='0px'};
if (!targ.style.top) { targ.style.top='0px'};
// calculate integer values for top and left 
// properties
if (targ.classList.contains("tform-5")) {tformTemp = "tform-5"};
if (targ.classList.contains("tform-15")) {tformTemp = "tform-15"};
if (targ.classList.contains("tform-25")) {tformTemp = "tform-25"};
targ.style.cursor="grabbing";
targ.style.zIndex="16";
targ.classList.remove(tformTemp);
coordX = parseInt(targ.style.left);
coordY = parseInt(targ.style.top);
drag = true;
// move div element
document.onmousemove=dragDiv;
return false;   
}

function dragDiv(e) {
if (!drag) {return};
if (!e) { var e= window.event};
// move div element
targ.style.left=coordX+e.clientX-offsetX+'px';
targ.style.top=coordY+e.clientY-offsetY+'px';
return false;
}
    
function stopDrag() {
targ.classList.add(tformTemp);
targ.style.cursor="grab";
targ.style.zIndex="14";
drag=false;
tformTemp = "";
$(".me").click(function() {
    $('.meGroup').append($(this));
});
}