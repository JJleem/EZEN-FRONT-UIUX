import { keyframes, styled } from "styled-components";

function App() {
  return (
    <Container>
      <Emoji>😀</Emoji>
      <Box>
        <Emoji>😀</Emoji>
        <Emoji>😀</Emoji>
        <Emoji>😀</Emoji>
      </Box>
      <Emoji>😀</Emoji>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.cityBold};
  gap: 8px;
`;
const rotationAnimation = keyframes`
0% {
  transform:rotate(0deg)
}
50% {
  transform:rotate(360deg);
  border-radius: 100%;
}
100% {
  transform:rotate(360deg)
}
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
`;
