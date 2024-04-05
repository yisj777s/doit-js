const origin = document.querySelector("#origin");
const result = document.querySelector("#result");
let numbers = [2, 4, 6, 8, 10];

// tail() 함수 작성
function tail(array) {
  let sliceArray;
  if (array.length > 1){
    return sliceArray = array.slice(1);
  } else if (array.length === 1){
    return sliceArray = array;
  }
}

origin.innerText = numbers;
result.innerText = tail(numbers);

// solution
// const origin = document.querySelector("#origin");
// const result = document.querySelector("#result");

// let numbers = [2, 4, 6, 8, 10];

// const tail = arr => ( arr.length > 1 ? arr.slice(1) : arr);

// // 아래와 같이 선언할 수도 있습니다.
// // function tail(arr) {
// //   let resultArr;
// //   if (arr.length > 1 ) {
// //     resultArr = arr.slice(1);
// //   } else {
// //     resultArr = arr;
// //   }
// //   return resultArr;
// // }

// origin.innerText = numbers;
// result.innerText = tail(numbers);

