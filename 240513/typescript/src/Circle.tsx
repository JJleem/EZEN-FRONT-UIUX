import React, { useState } from "react";
import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}
interface ContainerProps {
  bgColor: string;
  borderColor: string;
  text?: string;
}

const Circle = ({ bgColor, borderColor, text = "me too" }: CircleProps) => {
  const [counter, setCounter] = useState<number | string>(1);
  setCounter("hello");
  return (
    <Container borderColor={borderColor ?? bgColor} bgColor={bgColor}>
      {text}
    </Container>
  );
};

export default Circle;

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100%;
  border: 5px solid ${(props) => props.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
