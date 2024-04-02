import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });
  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div>
        <input
          name="name"
          value={state.name}
          placeholder="이름"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <select name="gender" value={state.gender} onChange={handleOnChange}>
          <option key={""}></option>
          <option key={"여성"}>여성</option>
          <option key={"남성"}>남성</option>
        </select>
      </div>
      <div>
        <input
          name="birth"
          value={state.birth}
          type="date"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <textarea
          name="bio"
          value={state.bio}
          onChange={handleOnChange}
        ></textarea>
      </div>
    </div>
  );
}

export default App;
