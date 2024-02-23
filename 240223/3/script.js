// const newP = document.createElement("p");
// const textNode = document.createTextNode("Typescript");
// const newImg = document.createElement("img");
// newImg.style.width = "200px";
// const srcNode = document.createAttribute("src");
// srcNode.value =
//   "https://img.khan.co.kr/news/2023/01/02/news-p.v1.20230102.1f95577a65fc42a79ae7f990b39e7c21_P1.png";
// newImg.setAttributeNode(srcNode);
// document.body.appendChild(newImg);

// newP.appendChild(textNode);

// document.body.appendChild(newP);

// 주문하기 버튼 클릭하면 oderInfo 에 h2문구 나오기
const itemName = document.querySelector("#container h2");
console.log(itemName);
const order = document.querySelector("#order");
console.log(order);

const info = document.querySelector("#orderInfo");
console.log(info);
// info.appendChild(itemName);

order.addEventListener(
  "click",
  () => {
    const newP = document.createElement("p");
    const textNode = document.createTextNode(itemName.innerText);
    console.log(textNode);
    newP.appendChild(textNode);
    newP.style.fontSize = "20px";
    info.appendChild(newP);
  },
  { once: true }
);
