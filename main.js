var mouseEvent="empty";
var l_p_x,l_p_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
color=document.getElementById("color").value;
width=document.getElementById("Width_line").value;
mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove (e) {
     c_p_mouse_x=e.clientX-canvas.offsetLeft;
     c_p_mouse_y=e.clientY-canvas.offsetTop;

     if(mouseEvent=="mouseDown") {
        ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;

console.log("Last position of x and y coordinates = ");
console.log("x = " + l_p_x + "y = " + l_p_x);


ctx.moveTo(l_p_x,l_p_y);
console.log("Current position of x and y coordinates = ");
console.log("x = " + c_p_mouse_x + "y = " + c_p_mouse_y);

ctx.lineTo(c_p_mouse_x,c_p_mouse_y);
ctx.stroke();
     }
l_p_x=c_p_mouse_x;
l_p_y=c_p_mouse_y;

 }
 canvas.addEventListener("mouseup", my_mouseup);
  function my_mouseup(e) {
 mouseEvent = "mouseUP";

 }
 canvas.addEventListener("mouseleave", my_mouseleave);
  function my_mouseleave(e) {
       mouseEvent = "mouseleave"; 
    }
    function clear_area() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }
