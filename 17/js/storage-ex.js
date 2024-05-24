//17.웹 API 활용하기
//17-2.웹 스토리지 API
//practice-17-2-1.웹 스토리지 다루기
let students = ["Kim", "Yi", "Park"];
console.log(`현재 students : ${students}`);
// 스토리지에 students 키로 배열을 저장.
localStorage.setItem("students", JSON.stringify(students));
sessionStorage.setItem("students", JSON.stringify(students));

// 로컬 스토리지에서 가져온 후 추가하고 저장.
let localData;
if (localStorage.getItem("students") === null) { // 스토리지에 students 키가 있는지 확인.
  localData = [];
} else {
  // 스토리지의 값을 localData로 저장.
  localData = JSON.parse(localStorage.getItem("students"));
}
localData.push("Choi");
localStorage.setItem("students", JSON.stringify(localData));
sessionStorage.setItem("students", JSON.stringify(localData));

console.log(`추가 후 students : ${localData}`);

// 로컬 스토리지에서 특정 값 삭제.
const indexOfValue = localData.indexOf("Kim"); // 인덱스 탐색
localData.splice(indexOfValue, 1); // 인덱스에 해당하는 값부터 1개 삭제.
localStorage.setItem("students", JSON.stringify(localData));
sessionStorage.setItem("students", JSON.stringify(localData));
console.log(`삭제 후 students : ${localData}`);

// 로컬 스토리지에서 특정 키를 삭제.
localStorage.removeItem("students");  
sessionStorage.removeItem("students");