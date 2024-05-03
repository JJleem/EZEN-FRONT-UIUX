import React from "react";
import styled from "styled-components";

interface Props {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: Props) => {
  return <Container onClick={onClick}>{label}</Container>;
};

export default Button;

const Container = styled.button`
  background: #ff5722;
  border: none;
  border-radius: 4px;
  color: #fff;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 1.3rem;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
