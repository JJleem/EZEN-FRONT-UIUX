const today = new Date();
const hrs = today.getHours();
console.log(today);
console.log(hrs);
const newImg = document.createElement("img");
const container = document.querySelector("#container");
newImg.src = hrs < 12 ? "./images/morning.jpg" : "./images/afternoon.jpg";
container.appendChild(newImg);
