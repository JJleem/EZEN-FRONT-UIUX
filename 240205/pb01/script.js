// html 에서 작성한 요소를 선택자로 불러오고자 할 때 !! 항상 앞에 "$"라는 특수문자를 사용함.
// template literal => js $

// $(".testimonial-pic img").click(function () {
//   $(this).addClass("active");
//   $(this).siblings().removeClass("active");
//   $(".testimonial .content").removeClass("active");
//   $("#" + $(this).attr("data-alt")).addClass("active");
// });

const pics = document.querySelectorAll(".testimonial-pic img");
console.log(pics);
const contents = document.querySelectorAll(".testimonial .content");
console.log(contents);

pics.forEach((pic) => {
  pic.addEventListener("click", function () {
    function siblings(t) {
      const children = t.parentElement.children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.remove("active");
      }
    }
    siblings(this);
    this.classList.add("active");

    contents.forEach(function (content) {
      content.classList.remove("active");
    });
    const targetContentId = this.getAttribute("data-alt");
    const targetContent = document.querySelector(`#${targetContentId}`);
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});
