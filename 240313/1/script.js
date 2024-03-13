// const getLocation = document.querySelector("#getLocation");

// const showPosition = (position) => {
//   console.log(position);
//   document.querySelector(
//     "#result"
//   ).innerHTML = `<b>위도 : ${position.coords.latitude}</b>
//   <b>경도 : ${position.coords.longitude}</b>

//   `;
// };

// const errorPosition = (err) => {
//   alert(err.message);
// };

// getLocation.addEventListener("click", () => {
//   if (window.navigator.geolocation) {
//     window.navigator.geolocation.getCurrentPosition(
//       showPosition,
//       errorPosition
//     );
//   } else {
//     alert("Geolocation을 지원하지 않습니다.");
//   }
//   console.log(getLocation);
// });

//=======================

const getLocation = document.querySelector("#getLocation");
// getLocation.addEventListener("click" () => {
//   if(navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition,)
//   } else {
//     alert("지오로케이션을 지원하지않는 기기")
//   }
// })

const showPosition = (position) => {
  document.querySelector(
    "#result"
  ).innerHTML = `<b>위도 : ${position.coords.latitude}</b>   <b>경도 : ${position.coords.longitude}</b>`;
};

const errorPosition = (err) => {
  alert(err.message);
};

getLocation.addEventListener("click", () => {
  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(
      showPosition,
      errorPosition
    );
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const watchId = navigator.geolocation.watchPosition(
      showPosition,
      errorPosition,
      options
    );

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 10000);
  } else {
    alert("Geolocation을 지원하지 않습니다.");
  }
  console.log(getLocation);
});
