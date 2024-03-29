const canvas = document.querySelector("canvas");
console.log(canvas);
const ctx = canvas.getContext("2d");

let triangle = new Path2D();
triangle.moveTo(100, 100);
triangle.lineTo(300, 100);
triangle.lineTo(200, 260);
triangle.closePath();

let circle = new Path2D();
circle.arc(200, 155, 50, 0, (Math.PI / 180) * 360);
ctx.fillStyle = "green";

ctx.fill(circle);

ctx.stroke(triangle);

ctx.beginPath();
ctx.moveTo(50, 100);
ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
ctx.stroke();

// ctx.strokeStyle = "blue";
// ctx.scale(1, 0.7);
// ctx.arc(200, 150, 80, 0, (Math.PI / 180) * 360, true);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(200, 150, 30, 0, (Math.PI / 180) * 360, false);
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.quadraticCurveTo(200, 50, 350, 200);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.quadraticCurveTo(100, 50, 150, 100);
// ctx.quadraticCurveTo(200, 150, 250, 100);
// ctx.quadraticCurveTo(300, 50, 350, 100);
// ctx.stroke();
// ctx.strokeStyle = "red";
// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, (Math.PI / 180) * 360);
// ctx.stroke();
// ctx.strokeStyle = "blue";
// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, (Math.PI / 180) * 360);
// ctx.stroke();
// 삼각형
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 100);
// ctx.lineTo(50, 150);
// ctx.closePath();
// // ctx.lineTo(50, 50);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(150, 100);
// ctx.lineTo(250, 50);
// ctx.lineTo(250, 150);
// ctx.closePath();
// ctx.fillStyle = "rgb(0,200,0)";
// ctx.fill();
// ctx.stroke();

// //원
// ctx.fillStyle = "yellow";
// ctx.strokeStyle = "red";
// ctx.beginPath();
// // ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
// ctx.closePath();
// ctx.fill();
// ctx.stroke();

// ctx.fillStyle = "blue";
// ctx.arc(120, 100, 50, 0, (Math.PI / 180) * 180, true);
// ctx.arc(200, 100, 50, 0, (Math.PI / 180) * 180, false);
// ctx.fill();
// ctx.beginPath();

// // ctx.beginPath();
// // ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
// // ctx.stroke();
// // ctx.closePath();

// ctx.strokeStyle = "blue";
// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
// ctx.stroke();
// // ctx.beginPath();
// // ctx.moveTo(50, 50);
// // ctx.lineTo(200, 200);
// // ctx.stroke();
// // canvas.width = window.innerWidth;
// // canvas.height = window.innerHeight;

// console.log(ctx);

// // // ctx.fillStyle = "rgb(200,0,0)";
// // ctx.fillStyle = "rgb(50,140,50)";
// // ctx.strokeStyle = "black";
// // ctx.fillRect(10, 10, 200, 100);
// // ctx.strokeRect(10, 10, 200, 100);

// // ctx.fillStyle = "blue";
// // ctx.fillRect(50, 50, 120, 100);

// // ctx.clearRect(70, 80, 80, 45);
// // ctx.fillRect(10, 10, 50, 100);

// // JS 세계관
// // 시간 : 1초 / 밀리초 1000
// // 각도 : 1도 45도 = > deg x
// // 각도 : Radian => 라디언 / 래디언
// // 1래디언 = 우리가 일상에서 이야기하는 180도 = (PI(원주율)/180)*180 => PI*1
// // Math.PI *1
// // 2래디언 = 360도 = PI*2 => Math.PI*2

// // const radians = (Math.PI / 180) * 180;
