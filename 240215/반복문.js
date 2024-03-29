// for(초기값; 조건식; 증감문) {
//   실행문
// }

// for문
// const students = ["Park", "Kim", "Lee", "Kang"];
// for (let i = 0; i < students.length; i++) {
//   document.write(`${students[i]}, `);
// }

// // forEach문
// 배열.forEach(function(배열안에있는 각각의 아이템)) {
//   //실행문
// }
// students.forEach(function (student) {
//   document.write(`${student}, `);
// });

// for문을 활용해서 구구단 출력하기!
// 중첩 반복 가능!
// for (let a = 2; a <= 9; a++) {
//   document.write("<h2>" + "[ 구구단 " + a + "단 ]" + "</h2>");
//   for (let b = 1; b <= 9; b++) {
//     document.write(a + "x" + b + "=" + a * b);
//     document.write("<br/>");
//   }
// }

// 중첩 for 문을 활용해서 5행 5열 테이블!!

// let num = 1;
// let t = "<table border=1>";
// for (let i = 1; i <= 5; i++) {
//   t += "<tr>";
//   for (let k = 1; k <= 5; k++) {
//     t += "<td>" + num + "</td>";
//     num++;
//   }
//   t += "</tr>";
// }

// t += "</table>";
// document.write(t);

// for...in문 => 객체전용
// for...of문 => 배열 전용
// for...in문
// const gitBook = {
//   title: "깃&깃허브",
//   pubDate: "2024-02-15",
//   pages: 272,
//   finished: true,
// };
// for (key in gitBook) {
//   document.write(`${key} : ${gitBook[key]}<br/>`);
// }
//for...of문
// const students = ["Park", "Kim", "Lee", "Kang"];
// for (student of students) {
//   document.write(`${student}, `);
// }

//while문
// while(조건식 => 참) {
//   //실행문
// }

// let stars = Number(prompt("별점을 매겨주세요!"));
// // while (stars > 0) {
// //   document.write("*");
// //   stars--;
// // }

// do {
//   document.write("*<br/>");
//   stars--;
// } while (stars > 0);

//for문 + css
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 == 0 && i % 7 != 0) {
//     document.write("<p class='red'>" + i + "</p>");
//   } else if (i % 7 == 0 && i % 5 !== 0) {
//     document.write("<p class='green'>" + i + "</p>");
//   } else {
//     document.write("<p class='aqua'>" + i + "</p>");
//   }
// }
// break문 예시

// for (let i = 1; i <= 10; i++) {
//   if (i === 6) {
//     break;
//   } else {
//     document.write(i, "<br/>");
//   }
// }

//continue문 예시
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     document.write(i, "<br/>");
//   }
// }

// 사용자에게 숫자를 하나 전달받으세요 !
// 해당 숫자가 소수인지 아닌지 식별한후 , 만약 해당 숫자가 소수 라면, "00는 소수입니다" 라고 출력해주세요!!
// 소수 :1과 자기자신으로만 나눠질수있는 숫자
// 단락회로 평가 : 특정값이 논리형 값 => true / false
// const numUser = Number(prompt("숫자를 입력해주세요!"));
// let isPrime;

// if (numUser === 2) {
//   isPrime = true;
// } else {
//   for (let i = 2; i < numUser; i++) {
//     if (numUser % i === 0) {
//       isPrime = false;
//       break;
//     } else {
//       isPrime = true;
//     }
//   }
// }

// if (isPrime) {
//   document.write(`${numUser}는 소수입니다.`);
// } else {
//   document.write(`${numUser}는 소수가 아닙니다.`);
// }

// 웹브라우저 화면에 아래 보이는 배열 아이템중 10이상되는 숫자만 출력
// const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     document.write(`${arr[i]}`);
//   }
// }
// if (arr >= 10) {
// }

// const students = ["Park", "Kim", "Lee", "Kang"];
// for (let i = 0; i < students.length; i++) {
//   document.write(`${students[i]}, `);

// 사용자에게 1보다 큰 수를 하나 전달받으세요!!. . .
// 그 숫자 안에 있는 짝수들만 더해서 웹 브라우저 화면에 출력해주세요!. . .
// 짝수에대한 정의가필요. . .
// 그 숫자보다 작거나 같은 수중 2로나눠지는 수들을 구함. . .

const number = Number(prompt("1보다 큰수를 하나 입력해주세요!"));

let sum = 0;

for (let i = 1; i <= number; i++) {
  if (i % 2 === 1) {
    continue;
  } else {
    sum += i;
    document.write(`${i} ---- ${sum} <br/>`);
  }
}
