import React from "react";
import styled from "styled-components";

interface Props {
  value: string;
  onChange: (text: string) => void;
}

const TextInput = ({ value, onChange }: Props) => {
  return <Input value={value} onChange={(e) => onChange(e.target.value)} />;
};

export default TextInput;

const Input = styled.input`
  font-size: 1.2rem;
  padding: 8px;
`;
