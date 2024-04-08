import "./App.css";
import Contents from "./Components/Contents";
import { useState } from "react";

//가위,바위,보 데이터 관리
const choice = {
  scissors: {
    name: "scissors",
    img: "https://cdn.imweb.me/thumbnail/20200514/7fc8b1411fa8d.png",
  },
  rock: {
    name: "rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
  },
  paper: {
    name: "paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimyPSZGGPmBXsazLzmKaCYHt5WM03RPC7LT2n4KLsCA&s",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState("");
  const [computerSelect, setComputerSelect] = useState();
  const [result, setResult] = useState("");
  const randomChoice = () => {
    const itemArray = Object.keys;
    const randomItem = Math.floor(
      (Math.randomItem = Math.random() * itemArray.length)
    );
    const final = itemArray[randomItem];
    return choice[final];
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? "win" : "lose";
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "win" : "lose";
    } else if (user.name === "paper") {
      return computer.name === "rock" ? "win" : "lose";
    }
  };

  const play = (item) => {
    setUserSelect(computerChoice);
    const computerChoice = randomChoice;
    // const computerChoice = randomChoice;
  };

  return (
    <div className="container">
      <div className="main">
        <Contents title="You" item={userSelect} result={result} />
        <Contents title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
