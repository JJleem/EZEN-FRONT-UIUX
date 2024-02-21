// 입력한 값 가져오기
// 등록을 눌렀을때
// 입력한 값을 ul태그에속한 li태그를 생성해 그 안에 값을 넣기
// const todo = document.querySelector("#todo");
// const submit = document.querySelector("#submit");
// console.log(todo);
// console.log(submit);
// let list = document.createElement(`li`);
// list += todo.value
// console.log(list);
// submit.onclick = list;

// 1. 사용자가 입력하는 값을 찾아오기위해 입력창 정의
// 2. 사용자가 클릭할 버튼에 정의
// 3. 버튼을 클릭했을 때 이벤트에 대한 기능 정의
// 4. li태그 DoM 생성 => 입력창을 통해서 전달받은 값을 li태그 삽입 => ul태그 자식요소
// 5. 사용자가 입력한 값을 출력할 공간에 출력

const form = document.querySelector("form");
const input = document.querySelector("form input[type='text']");
const ul = document.querySelector("ul");
console.log(input);

const formFnc = (e) => {
  e.preventDefault();
  if (input.value !== "") {
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
  }
};

form.onsubmit = formFnc;
