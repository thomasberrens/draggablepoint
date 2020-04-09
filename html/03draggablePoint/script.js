const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let myPoint = new Point (200, 200, 50, "purple", true)

function Animate()
{
  context.clearRect(0, 0, width, height);
  myPoint.draw(context)
}

setInterval(Animate, 10);


