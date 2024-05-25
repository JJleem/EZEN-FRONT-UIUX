import { Node, LinkedList } from "./LinkedList.mjs";

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node2.next = node3;

console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next.next.data);

let list = new LinkedList();

console.log("=== insertAt() 다섯번 호출 ===");
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
list.printAll();
console.log("=== clear() 호출 ===");
list.clear();
list.printAll();
console.log("=== insertLast() 세 번 호출 ===");
list.insertLast(0);
list.insertLast(1);
list.insertLast(2);
list.printAll();
console.log("=== deleteAt() 호출 ===");
list.deleteAt(0);
list.printAll();
list.deleteAt(1);
list.printAll();
console.log("=== deleteAt() 호출 ===");

//enqueue : 데이터 삽입 기능
//dequeue : 데이터 제거 기능
//front : 데이터 참조 기능
//isEmpty : 데이터가 비어있는지 여부 확인 기능
//printAll() : 연결리스트를 출력하는 기능
//addFirst() : 연결리스트 최초 인덱스에 값을 추가하는 기능
//removeFirst() : 연길리스트 마지막 인덱스에 값을 추가하는 기능
//removeLast() : 연결리스트 마지막 인덱스에 값을 삭제하는 기능
//isEmpty() : 연결리스트 값이 존재하는지 여부를 확인하는 기능