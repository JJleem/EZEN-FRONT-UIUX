import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/resultdata";

const Result = () => {
  const [resultData, setResultData] = useState({});
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");

  useEffect(() => {
    const result = ResultData.find((item) => item.best === mbti);
    setResultData(result);
  }, [mbti]);

  return (
    <Wrapper>
      <Header>🐱예비집사 판별기 결과🐱</Header>
      <Contents>
        <Title>결과 보기</Title>
        <LogoImage>
          <img
            className="rounded-circle"
            width={350}
            height={350}
            src={resultData.image}
            alt="cat"
          />
        </LogoImage>
        <Desc>
          {resultData.best}예비 집사님과 찰떡궁합인 고양이는 {resultData.name}
          <br /> {resultData.desc}
        </Desc>
        <Button onClick={handleClick}>테스트 다시하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #6cabdd;
  font-family: "SimKyungha";
`;

const Header = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(108, 101, 221);
  padding: 10px 20px;
  border-radius: 8px;
  color: #fff;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-size: 30px;
  margin-top: 40px;
`;
const LogoImage = styled.div`
  width: 350px;
  height: 350px;
  margin: 10px 0 20px;
`;

const Desc = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  font-size: 20px;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
`;
