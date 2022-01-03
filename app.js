//Image and containers defined

const imgDrag = document.querySelector(".img");
const boxes = document.querySelectorAll(".box");

// Draggable Image Listeners
imgDrag.addEventListener("dragstart", dragStart);
imgDrag.addEventListener("dragend", dragEnd);

// Drag Functions

// It runs when drag is start.
function dragStart(e) {
  e.target.className += " move";
  setTimeout(() => (e.target.className = "hide"), 0);
}

// It runs when drag is end.
function dragEnd() {
  this.className = "img";
}

// Add drag listeners to the boxes
for (const box of boxes) {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", drop);
}

// dragOver is fired when the img is being dragged over a valid target.
function dragOver(e) {
  e.preventDefault();
}

//dragEnter is fired when the img  enters a valid target.
function dragEnter(e) {
  e.preventDefault();
  e.target.className += " hovered";
}

// dragLeave is fired when the img  leaves a valid target.
function dragLeave() {
  this.className = "box";
}

//drop is fired when the img is dropped on a valid target.
function drop(e) {
  e.target.className = "box";
  e.target.append(imgDrag);
}
