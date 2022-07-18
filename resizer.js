
var resizer = document.querySelector(".resizer"),
   sidebar = document.querySelector(".sidebar");


function initResizerFn( resizer, sidebar ) {

   // track current mouse position in x var
   var x, w;

   function rs_mousedownHandler( e ) {

      x = e.clientX;

      var sbWidth = window.getComputedStyle( sidebar ).width;
      w = parseInt( sbWidth, 10 );

      document.addEventListener("mousemove", rs_mousemoveHandler);
      document.addEventListener("mouseup", rs_mouseupHandler);
   }

   function rs_mousemoveHandler( e ) {
      var dx = e.clientX - x;

      var cw = w + dx; // complete width
      
      if ( cw < 700 ) {
         sidebar.style.width = `${ cw }px`;
      }
   }

   function rs_mouseupHandler() {
      // remove event mousemove && mouseup
      document.removeEventListener("mouseup", rs_mouseupHandler);
      document.removeEventListener("mousemove", rs_mousemoveHandler);
   }

   resizer.addEventListener("mousedown", rs_mousedownHandler);
}


initResizerFn( resizer, sidebar );