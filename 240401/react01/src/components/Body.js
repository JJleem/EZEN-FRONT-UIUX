import React from "react";

const Body = () => {
  const number = Math.random();
  const numA = "안녕";
  const numB = "리액트";
  const boolA = true;
  const boolB = false;
  const objA = {
    a: "안녕",
    b: "하세요",
    c: 3,
  };
  const num = (number * 100).toFixed(0);

  if (num % 2 === 0) {
    return <h1>{num} 은 짝수입니다.</h1>;
  } else {
    return <h1>{num} 은 홀수입니다.</h1>;
  }

  return (
    <>
      <h1>body</h1>
      <h2>
        {num} 은(는) {num % 2 === 0 ? "짝수" : "홀수"} 입니다.
      </h2>
    </>
  );
};

export default Body;

// rafc
