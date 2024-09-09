// Create the green rectangle
let greenRectangle = document.createElement('div');
greenRectangle.style.position = 'absolute';
greenRectangle.style.width = '100%';
greenRectangle.style.height = '3cm';
greenRectangle.style.backgroundColor = 'rgba(132, 112, 255, 0.4)';
greenRectangle.style.top = '100px';
greenRectangle.style.left = '0';
greenRectangle.style.zIndex = '9999';
greenRectangle.style.cursor = 'move';

document.body.appendChild(greenRectangle);

// Function to handle dragging
let isDragging = false;
let startY;

greenRectangle.addEventListener('mousedown', function (event) {
  isDragging = true;
  startY = event.clientY - greenRectangle.offsetTop;
  event.preventDefault();
});

document.addEventListener('mousemove', function (event) {
  if (isDragging) {
    let newY = event.clientY - startY;
    greenRectangle.style.top = newY + 'px';
  }
});

document.addEventListener('mouseup', function () {
  isDragging = false;
});

// Handle keyboard controls (up/down arrow keys)
document.addEventListener('keydown', function (event) {
  let currentTop = parseInt(greenRectangle.style.top);
  if (event.key === 'ArrowUp') {
    greenRectangle.style.top = (currentTop - 10) + 'px';
  } else if (event.key === 'ArrowDown') {
    greenRectangle.style.top = (currentTop + 10) + 'px';
  }
});

// 你可以监听 keydown 事件，检测到用户按下 Delete 键时，移除矩形元素。可以通过 addEventListener 来捕捉键盘事件，以下是添加删除矩形的代码：
document.addEventListener('keydown', function(event) {
  if (event.key === 'Delete' && selectedElement) {
    selectedElement.remove();
    selectedElement = null;
  }
});
