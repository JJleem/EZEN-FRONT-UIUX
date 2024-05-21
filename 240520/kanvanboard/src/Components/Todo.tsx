import React from "react";
import { ITodo, toDoState } from "./atoms";
import { useSetRecoilState } from "recoil";

const food = ["pizza", "mango", "kimchi", "kimbab"];
//지금 아래 보이는 배열에서  mango를 빼고, 그자리에 gim 을 넣으세요;
const front = ["pizza"];
const back = ["kimchi", "kimbab"];
const result = [...front, "gim", ...back];
console.log(result);

const Todo = ({ text, category, id }: ITodo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.target as HTMLButtonElement;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newTodo = { id, text, category: name };
      console.log(newTodo);
      return oldToDos;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          ToDo
        </button>
      )}
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default Todo;
