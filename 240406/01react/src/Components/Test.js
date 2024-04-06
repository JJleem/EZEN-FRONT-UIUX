import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    case "INIT":
      return 0;
    default:
      return state;
  }
};
const TestComp = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h4>TestComponent</h4>
      <div>
        <bold>{count}</bold>
      </div>
      <div className="buttons">
        <button
          onClick={() =>
            dispatch({
              type: "INCREASE",
              data: 1,
            })
          }
        >
          +
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "INIT",
            })
          }
        >
          0
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "DECREASE",
              data: 1,
            })
          }
        >
          -
        </button>
      </div>
    </div>
  );
};

export default TestComp;
