const userNumber = document.querySelector("input[type='text']");
const button = document.querySelector("form");

const resultNumber = (e) => {
  e.preventDefault();
  const n = userNumber.value;

  try {
    if (n === "" || isNaN(n)) {
      throw "숫자를 입력하세요!";
    }
    n = Number(n);
    if (n <= 10) {
      document.querySelector("#result").innerText = n;
    }
    if (n >= 10) {
      throw "10보다 작은 숫자를 입력하세요!";
    }
  } catch (err) {
    alert(err);
  } finally {
    userNumber.value = "";
  }
};
