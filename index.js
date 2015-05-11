function createDot(size, color) {
  var size = size || '50px', color = color || 'pink';
  var dot = document.createElement('div');
  dot.className = "dot-canvas__dot";
  dot.style.width = dot.style.height = dot.style.borderRadius = size; 
  dot.style.backgroundColor = color;

  return dot; 
};

function createDotRow(width, height) {
  var row = document.createElement('div');
  row.className = "dot-canvas__row";
  row.style.setProperty('width', width);
  row.style.setProperty('min-height', height);
  row.style.setProperty('display', 'flex');
  row.style.setProperty('justify-content', 'space-around');
  row.style.setProperty('position', 'absolute');

  return row;
}

function createDotCanvas(width, height) {
  var canvas = document.createElement('div');
  canvas.className = 'dot-canvas__container';
  canvas.style.setProperty('width', width);
  canvas.style.setProperty('min-height', height);
  canvas.style.setProperty('overflow', "hidden");
  canvas.style.setProperty('position', 'relative');

  return canvas;
}

function dotColCount(canvasWidth, dotSize) {
  var count = (parseInt(canvasWidth)/parseInt(dotSize))/2;
  return count; 
}

function dotRowCount(canvasHeight, dotSize) {
  var count = parseInt(canvasHeight) / parseInt(dotSize);
  return count;
} 

function paintDots(selector, dotSize, dotColor) {
  var target = document.querySelector(selector);
  var targetStyle = getComputedStyle(target);
  target.style.setProperty('overflow', 'hidden');
  
  var rowOffset = parseInt(targetStyle.width) * .1;
  var rowWidth = parseInt(targetStyle.width) + (2 * rowOffset);

  var canvas = createDotCanvas(rowWidth, targetStyle.height);
  for (var r = 0; r < dotRowCount(targetStyle.height, dotSize); r++) { 
    var row = createDotRow(rowWidth + 'px', dotSize); 
    row.style.setProperty('top', (parseInt(dotSize) * r) + 'px');

    if ((r % 2) === 0) {
      row.style.setProperty('right', dotSize);
    }

    for (var i = 0; i < dotColCount(rowWidth, dotSize); i++) {
      var dot = createDot(dotSize, dotColor);
      row.appendChild(dot);
    }
    
    canvas.appendChild(row);
  }
  target.appendChild(canvas);
}

if (typeof window !== 'undefined') {
  window.pointillist = paintDots;
}
module.exports = paintDots;
