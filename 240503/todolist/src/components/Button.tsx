import React from "react";
import styled from "styled-components";

interface Props {
  label: string;
  onClick?: () => void;
  color?: string;
}

const Button = ({ label, onClick, color = "#6cabdd" }: Props) => {
  return (
    <Container color={color} onClick={onClick}>
      {label}
    </Container>
  );
};

export default Button;

const Container = styled.button`
  background: ${(props) => props.color};
  color: #fff;
  border-radius: 4px;
  border: none;
  padding: 8px 16px;
  &:hover {
    background: ${(props) => props.color};
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
