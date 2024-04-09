import React from "react";
import Button from "../component/Button";
import Header from "../component/Header";
const Home = () => {
  return (
    <div>
      <Header
        title={"Home"}
        leftChild={
          <Button
            text={"긍정 버튼"}
            type="positive"
            onClick={() => alert("positive button")}
          />
        }
        rightChild={
          <Button
            text={"부정 버튼"}
            type="negative"
            onClick={() => alert("negative button")}
          />
        }
      />
    </div>
  );
};

export default Home;
