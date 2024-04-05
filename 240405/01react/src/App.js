import "./App.css";

import Header from "./Components/Header";
import TodoEditor from "./Components/TodoEditor";
import TodoList from "./Components/TodoList";
import React, { useReducer, useRef, useCallback, useMemo } from "react";

// Context
export const TodoContext = React.createContext();
console.log(TodoContext);
export const TodoDispathContext = React.createContext();

//state function
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
};

// mockup data
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React.js 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "도마뱀 밥주기",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "피그미 청소해주기",
    createDate: new Date().getTime(),
  },
];

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);

  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        isDone: false,
        content,
        createDate: new Date().getTime(),
      },
    });

    idRef.current += 1;
  };

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);
  const memoizeDspathes = useMemo(() => {
    return onCreate, onUpdate, onDelete;
  });
  return (
    <div className="App">
      <Header />
      <TodoContext.Provider value={{ todo, onCreate, onUpdate, onDelete }}>
        <TodoEditor />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
