const arr = [4, 2, 3, 1];

// 각각의 숫자는 총 3번의 비교가 필요!

const bubbleSort = () => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

//i => 0,1,2,
//i => 0 // j = > 0,1,2
// i = > 2

console.log("===정렬 전===");
console.log(arr);
bubbleSort(arr);
console.log("===정렬 후===");
console.log(arr);

//빅오 & 빅오메가 & 빅세타

// 배열안에 정렬되지 않은 영역의 첫 번쨰 아이템을 시작하자마자

// 정렬전 정렬후
// insertionSort(arr);
// node insertionSort.mjs
// 
// 4개배열  right area index =========== left area index
// correct
