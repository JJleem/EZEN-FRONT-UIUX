$("nav a").click(function (e) {
  e.prevntDefault();
  $.scrollTo(this.hash, 1500);
});
