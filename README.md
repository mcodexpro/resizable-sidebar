# resizable-sidebar
How to create resizable side bar menu with HTML, Css and Javascript

## index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Resizable Sidebar</title>
   <link rel="stylesheet" href="style.css">
</head>
<body>
   <div class="sb-cover">
      <div class="sidebar">
         <div class="resizer"></div>
         <div class="header">
            <h3>Sidebar Menu</h3>
         </div>
         <ul>
            <li>Sidebar menu list 1</li>
            <li>Sidebar menu list 2</li>
            <li>Sidebar menu list 3</li>
            <li>Sidebar menu list 4</li>
            <li>Sidebar menu list 5</li>
            <li>Sidebar menu list 6</li>
            <li>Sidebar menu list 7</li>
            <li>Sidebar menu list 8</li>
            <li>Sidebar menu list 9</li>
         </ul>
      </div>
   </div>
   <div class="rs-content">
      <h1>Let's creating resizable sidebar menu</h1>
   </div>
   <script src="./resizer.js"></script>
</body>
</html>
```

## style.css

```
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

html, body {
   width: 100%;
   height: 100%;
   user-select: none;
   display: flex;
   background-color: #fff;
}

.sidebar {
   width: 333px;
   height: 100%;
   overflow-x: hidden;
   position: relative;
   background-color: #eee;
}

.resizer {
   width: 3px;
   top: 0;
   right: 0;
   cursor: col-resize;
   height: 100%;
   position: absolute;
   background-color: #42b362;
}

.header {
   padding: 22px 11px;
   background-color: #fff;
}

.header h3 {
   color: #2e2e9b;
}

.header h3, ul li {
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
}

ul {
   padding: 11px 0px;
   list-style: none;
}

ul li {
   cursor: pointer;
   font-size: 14px;
   font-weight: 500;
   padding: 5px 11px;
}

ul li:hover {
   background-color: #fffbfb;
}

.rs-content {
   flex-grow: 1;
   padding: 3% 22px;
   text-align: center;
   background-color: #555;
}

h1 {
   color: #fff;
   font-weight: 500;
   text-transform: uppercase;
}
```

## resizer.js

```

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
```
