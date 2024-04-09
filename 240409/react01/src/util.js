import emotion1 from "./img/emotion1.png";
import emotion2 from "./img/emotion2.png";
import emotion3 from "./img/emotion3.png";
import emotion4 from "./img/emotion4.png";
import emotion5 from "./img/emotion5.png";

// 외부에서쓰려면 모듈화해야함
export const getEmotionImgById = (emotionId) => {
  // 숫자를받을거라 숫자를 문자로 바꾸기 String
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    // 존재하지않는 값이나 안적힌다면 default 값을 준다.
    default:
      return null;
  }
};
