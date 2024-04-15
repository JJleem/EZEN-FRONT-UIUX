// 커스텀 훅!!!
// F/E 개발자가 직접 훅을 만들어서 사용 가능
// JS class 객체의 형태를 커스텀

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [diary, setDiary] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const matchDiary = data.find((it) => String(it.id) === String(id));
    if (matchDiary) {
      setDiary(matchDiary);
    } else {
      alert("존재하지 않는 일기입니다.");
      navigate("/");
    }
  }, [id, data]);
  return diary;
};

export default useDiary;
