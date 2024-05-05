import React, { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import "./App.css";
import Label from "./components/Label";

function App() {
  const [counter, setCounter] = useState(0);
  const sub = () => {
    setCounter(counter - 1);
  };
  const add = () => {
    setCounter(counter + 1);
  };
  return (
    <Container>
      <Title>Counter APP</Title>
      <Contents>
        <Button label="-" onClick={sub} />
        <Label data={counter} />
        <Button label="+" onClick={add} />
      </Contents>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Title = styled.h1`
  margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
