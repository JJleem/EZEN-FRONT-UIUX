// jQuery 구현

// $(".stars .fas").click(function () {
//   $(this).addClass("active");
//   $(this).prevAll().addClass("active");
//   $(this).nextAll().removeClass("active");

//   const num = $(this).index();
//   const starRate = num + 1;
//   $(".print").text(starRate);

//   if (starRate === 1) {
//     $(".print").html("별로에요!" + '<img src="./images/star-lv1.png" />');
//   } else if (starRate === 2) {
//     $(".print").html("그냥그래요!" + '<img src="./images/star-lv2.png" />');
//   } else if (starRate === 3) {
//     $(".print").html("보통이에요!" + '<img src="./images/star-lv3.png" />');
//   } else if (starRate === 4) {
//     $(".print").html("맘에들어요!" + '<img src="./images/star-lv4.png" />');
//   } else if (starRate === 5) {
//     $(".print").html("아주좋아요!" + '<img src="./images/star-lv5.png" />');
//   }
// });

// Javascript 구현

const stars = document.querySelectorAll(".stars .fas");
const print = document.querySelector(".print");
const imgs = [
  "./images/star-lv1.png",
  "./images/star-lv2.png",
  "./images/star-lv3.png",
  "./images/star-lv4.png",
  "./images/star-lv5.png",
];

Element.prototype.previousElementSiblingAll = function () {
  let siblings = [];
  let current = this.previousElementSibling;
  while (current !== null) {
    siblings.push(current);
    current = current.previousElementSibling;
  }
  return siblings;
};

stars.forEach((star) => {
  star.addEventListener("click", function () {
    stars.forEach(function (e) {
      e.classList.remove("active");
    });
    this.classList.add("active");

    const prestars = Array.from(this.previousElementSiblingAll());
    prestars.forEach(function (prestars) {
      prestars.classList.add("active");
    });

    const num = Array.from(stars).index0f(this);
    const starRate = num + 1;
    if (starRate === 1) {
      print.innerHTML = `"별로에요!"<img src=${imgs[0]}>`;
    }
  });
});
