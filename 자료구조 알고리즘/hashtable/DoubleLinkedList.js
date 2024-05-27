// 연결리스트에서 노드 아이템으로 활용될 요소 class 생성

class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

//노드 아이템이 모여서 연결리스트가 되었을 때, 갖추고 있어야할 기능 정의 class 생성

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }
  insertAt(index, data) {
    if (index > this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }
  }
}

let newNode = new Node(data);

if (index === 0) {
}

// 추상자료형 함수
printAll();
console.log(`isContain:${hashSet.isContain(512)}`);
give me break;