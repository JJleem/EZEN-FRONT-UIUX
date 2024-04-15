import React, { useContext, useEffect } from "react";
import { DiaryDispatchContext } from "../App";
import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import { setPageTitle } from "../util";

const Edit = () => {
  const { id } = useParams();
  const data = useDiary(id);
  useEffect(() => {
    setPageTitle(`${id}번째 일기 Edit`);
  }, []);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않습니다.")) {
      onDelete(id);
      navigate("/");
    }
  };
  const onSubmit = (data) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      const { date, emotionId, content } = data;
      onUpdate(id, date, emotionId, content);
      navigate("/");
    }
  };
  if (!data) {
    return <div>일기를 불러오고있습니다...</div>;
  } else {
    return (
      <div>
        <Header
          leftChild={<Button text="< 뒤로가기" onClick={goBack} />}
          title="일기 수정하기"
          rightChild={
            <Button text="삭제하기" type="negative" onClick={onClickDelete} />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};

export default Edit;
