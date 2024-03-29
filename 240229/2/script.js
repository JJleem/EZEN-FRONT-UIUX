// const str = "hello";
// const greeting = "안녕하세요!";
// const str01 = "Good Morning!";
// console.log(str.length);
// console.log(greeting.length);
// // console.log(str01.charAt());

// const string = prompt("문자열을 입력하세요!");
// const letter = prompt("어떤 문자를 체크하겠습니까?");
// const counting = (str, ch) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ch) {
//       count += 1;
//     }
//   }
//   return count;
// };

// const result = counting(string, letter);
// document.write(`${string}에는 ${letter}가 ${result}번 사용 되었습니다.`);

//charAt(): 매개변수의 인덱스값을 가지고있는 문자열을 찾아올 때 (*문자열[인덱스값]으로도 사용가능!)

const str1 = "Good morning, everyone. Beatiful morning.";

console.log(str1.indexOf("morning"));

console.log(str1.indexOf("evening"));

// console.log(str1.indexOf("morning", firstIndex + 1));

const str2 = "Hello, everyone";

console.log("====startswith====");
console.log(str2.startsWith("Hello"));
console.log(str2.startsWith("hello"));
console.log(str2.startsWith("He"));
console.log(str2.startsWith("Hello, ev"));
console.log(str2.startsWith("el", 1));
console.log(str2.startsWith("o", 4));

console.log("==== endswith ====");
console.log(str2.endsWith("everyone"));
console.log(str2.endsWith("everyone."));
console.log(str2.endsWith("Everyone."));
console.log(str2.endsWith("one"));
console.log(str2.endsWith("lo, everyone"));
console.log(str2.endsWith("ne"));

console.log("====includes====");
console.log(str2.includes("every"));
console.log(str2.includes("e"));
console.log(str2.includes("f"));
console.log(str2.includes("."));
console.log(str2.includes(" "));
console.log(str2.includes(", e"));

console.log("====trim methods====");
const str3 = "ab cd ef";
const str3_1 = " ab cd ef ";
console.log(str3);
console.log(str3_1);
console.log(str3_1.trim());
console.log(str3_1.trimStart());
console.log(str3_1.trimEnd());

console.log("==== Uppercase / Lowercase ====");
let str4 = "Good Morning";
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());

console.log("====substring====");
console.log(str4.substring(5, 8));
console.log(str4.substring(0));
console.log(str4.substring(-5, 11));
// 음수값 인식못함 => 음수값들어오는순간 0으로 치환해버림

console.log("====slice====");
console.log(str4.slice(5, 8));
console.log(str4.slice(0));
console.log(str4.slice(-5, 11));

console.log("====split====");
const str5 = "Hello everyone";
const array1 = str5.split(" ");
const array2 = str5.split("");
console.log(array1);
console.log(array2);
