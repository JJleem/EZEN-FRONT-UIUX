import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import Button from "../component/Button";
import { getFormattedDate, setPageTitle } from "../util";
import Viewers from "../component/Viewers";
import { useEffect } from "react";

const Diary = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useDiary(id);
  useEffect(() => {
    setPageTitle(`${id}번째 일기`);
  }, []);
  const goback = () => {
    navigate(-1);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const { date, emotionId, content } = data;

    const title = `${getFormattedDate(new Date(Number(date)))} 일기`;
    return (
      <div>
        <Header
          leftChild={<Button text="< 뒤로가기" onClick={goback} />}
          title={title}
          rightChild={<Button text="수정하기" onClick={goEdit} />}
        />
        <Viewers emotionId={emotionId} content={content} />
      </div>
    );
  }
};

export default Diary;
