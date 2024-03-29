const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.font = "italic 60px serif";
// ctx.fillText("Javascript", 50, 70);

// ctx.font = "bold 60px sans-serif";
// ctx.fillText("Javascript", 50, 150);

let img = new Image();
console.log(img);
img.onload = () => {
  ctx.drawImage(img, 0, 0, 300, 200);
  // ctx.drawImage(img, 0, 0, 300, 200);
};
img.src = "./cat_480.jpg";
