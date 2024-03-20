const first = document.querySelector(".first");
const second = document.querySelector(".second");
const submit = document.querySelector(".submit");
const button = document.querySelector(".button");
const result = document.querySelector(".result");

submit.addEventListener("click", () => {
  const maxNumber = first.value;
  const count = second.value;
  function generateRandomNumbers(maxNumber, count) {
    let randomNumbers = new Set();
    while (randomNumbers.size < count) {
      let num = Math.floor(Math.random() * maxNumber) + 1;
      randomNumbers.add(num);
    }
    return Array.from(randomNumbers);
  }
  function displayRandomNumbers() {
    const maxNumber = first.value;
    const count = second.value;
    const numbers = generateRandomNumbers(maxNumber, count);
    result.innerHTML = ` ${numbers.join(", ")}`;
  }

  displayRandomNumbers();
  
});

