// Import stylesheets
import './style.css';
import $ from 'jquery';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

$('.tooltip').mousemove(function (e) {
  //console.log(e.pageX);
  //console.log(e.pageY);
  var TOOL_TOP = document.getElementById('xToolTip');
  TOOL_TOP.style.left = e.pageX;
  TOOL_TOP.style.top = e.pageX;
  TOOL_TOP.style.display = 'inline-block';
});

function IsPopUpTime(e, tager) {
  var TOOL_TOP = document.getElementById('xToolTip');
  if (e.type == 'mouseleave') {
    TOOL_TOP.style.display = 'none';
  } else {
    TOOL_TOP.style.left = e.pageX;
    TOOL_TOP.style.top = e.pageX;
    TOOL_TOP.style.display = 'inline-block';
  }
}
document.body.addEventListener(
  'mouseenter',
  function (e) {
    e = e || window.event;
    var targetElem = e.target || e.srcElement;
    if (targetElem.classList == 'tooltip-text') {
      IsPopUpTime(e, targetElem);
      console.log(e.type);
    }
  },
  false
);
document.body.addEventListener(
  'mouseleave',
  function (e) {
    e = e || window.event;
    var targetElem = e.target || e.srcElement;
    if (targetElem.classList == 'tooltip-text') {
      IsPopUpTime(e, targetElem);
      console.log(e.type);
    }
  },
  false
);

(function () {
  var mousePos;

  document.onmousemove = handleMouseMove;
  setInterval(getMousePosition, 100); // setInterval repeats every X ms

  function handleMouseMove(event) {
    var dot, eventDoc, doc, body, pageX, pageY;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX =
        event.clientX +
        ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
        ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
      event.pageY =
        event.clientY +
        ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
        ((doc && doc.clientTop) || (body && body.clientTop) || 0);
    }

    mousePos = {
      x: event.pageX,
      y: event.pageY,
    };
    //console.log('==>' + event.pageX);
    //console.log('==>' + event.pageY);
  }
  function getMousePosition() {
    var pos = mousePos;
    if (!pos) {
      // We haven't seen any movement yet
    } else {
      // Use pos.x and pos.y
    }
  }
})();
