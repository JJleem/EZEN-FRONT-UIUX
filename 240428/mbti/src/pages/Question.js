import React, { useState } from "react";
import { styled } from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";
import { createSearchParams, useNavigate } from "react-router-dom";

const Question = () => {
  const navigate = useNavigate();
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    {
      id: "EI",
      score: 0,
    },
    {
      id: "SN",
      score: 0,
    },
    {
      id: "TF",
      score: 0,
    },
    {
      id: "JP",
      score: 0,
    },
  ]);

  const handleClickButton = (num, type) => {
    const newScore = totalScore.map((it) =>
      it.id === type ? { id: it.id, score: it.score + num } : it
    );
    setTotalScore(newScore);

    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );

      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };

  return (
    <div>
      <ProgressBar
        striped
        variant="info"
        now={(questionNo / QuestionData.length) * 100}
      />
      <Wrapper>
        <div>
          <Title>{QuestionData[questionNo].title}</Title>
          <ButtonGroup>
            <Buttons
              onClick={() =>
                handleClickButton(1, QuestionData[questionNo].type)
              }
            >
              {QuestionData[questionNo].answera}
            </Buttons>
            <Buttons
              onClick={() =>
                handleClickButton(0, QuestionData[questionNo].type)
              }
            >
              {QuestionData[questionNo].answerb}
            </Buttons>
          </ButtonGroup>
        </div>
      </Wrapper>
    </div>
  );
};

export default Question;

const Wrapper = styled.div`
  background: #6cabdd;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 20px;
`;
// const Button = styled.div`
//   width: 400px;
//   height: 400px;
//   border: 1px solid #000;
// `;
const Buttons = styled(Button)`
  width: 400px;
  height: 200px;
  font-size: 16px;
`;
