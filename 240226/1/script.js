const btn = document.querySelector("button");
console.log(btn);
const popupWidth = 600;
const popupheight = 500;

btn.addEventListener("click", () => {
  const left = (window.screen.availWidth - popupWidth) / 2;
  const top = (window.screen.availHeight - popupheight) / 2;
  window.open(
    "popup.html",
    "event",
    `width=${popupWidth} height =${popupheight} left =${left} top=${top}`
  );
});
