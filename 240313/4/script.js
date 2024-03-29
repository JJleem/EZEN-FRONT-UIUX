//https://openweathermap.org/

const getPositiom = (content: PageTransitionEventd

const errorHandler = () => {
  const noti = document(".noti");
  noti.style.display = "block";
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandler);
} else {
  alert("geolocation is not availabe!");
}
   