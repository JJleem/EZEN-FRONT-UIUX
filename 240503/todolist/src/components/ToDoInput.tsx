import React, { useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import Button from "./Button";
import TextInput from "./TextInput";

interface Props {
  onAdd: (toDo: string) => void;
}

const ToDoInput = ({ onAdd }: Props) => {
  const [toDo, setToDo] = useState("");
  const onAddTodo = () => {
    if (toDo === "") return;
    onAdd(toDo);
    setToDo("");
  };
  return (
    <Container>
      <Background />
      <Contents>
        <Title label="할일 추가" />
        <InputContainer>
          <TextInput value={toDo} onChange={setToDo} />
          <Button label="추가" color="#304ffe" onClick={onAddTodo} />
        </InputContainer>
      </Contents>
    </Container>
  );
};

export default ToDoInput;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  padding: 32px;
  z-index: 1;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;
