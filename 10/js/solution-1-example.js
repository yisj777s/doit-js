// my code
const origin = document.querySelector("#origin");
const result = document.querySelector("#result");
const array1 = [2, 4, 6, 8, 10];

function displayArray(area, array1) {
  let str = [];
  for (let i = 0; i < array1.length; i++){
    str += `<td>${array1[i]}</td>`;
  }
  area.innerHTML = `<table>${str}</table>`;
}

displayArray(origin, array1);

let arraySum = 0;
for (let i = 0; i < array1.length; i++) {
  arraySum += array1[i];
}

array1.push(arraySum);
displayArray(result, array1);

// solution
// const origin = document.querySelector("#origin");
// const result = document.querySelector("#result");

// let numbers = [2, 4, 6, 8, 10];
// showArray(origin, numbers);

// let sum = 0;
// for(let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// numbers.push(sum);
// showArray(result, numbers);

// function showArray(area, arr) {
//   let str;
//   str = "<table><tr>";
//   for (let i = 0; i < arr.length; i++) {
//     str +=  "<td>" + arr[i] + "</td>";
//   }
//   str += "</tr></table>";
//   area.innerHTML = str;
// }