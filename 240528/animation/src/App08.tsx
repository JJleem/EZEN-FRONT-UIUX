import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  position: absolute;
  top: 200px;
`;

const box = {
  initial: (back: boolean) => ({
    x: back ? -300 : 300,
    opacity: 0,
    scale: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exits: (back: boolean) => ({
    x: back ? 300 : -300,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  };
  const prevPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };
  return (
    <Wrapper>
      <AnimatePresence custom={back} mode="wait">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box
              custom={back}
              variants={box}
              initial="initial"
              animate="visible"
              exit="exits"
              key={visible}
            >
              {i}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <Buttons>
        <button onClick={prevPlease}>Prev</button>
        <button onClick={nextPlease}>Next</button>
      </Buttons>
    </Wrapper>
  );
}

export default App;

const Buttons = styled.div`
  display: flex;
  gap: 5px;
`;
