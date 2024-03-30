const string = prompt("영문 소문자로 된 문자열을 입력하세요.");

// const firstCh = string[0].toUpperCase();
// const remainStr = string.slice(1); // 두 번째 글자부터 끝까지 추출.
// const result = firstCh + remainStr;
// document.write(result);

// 전개 연산자 사용
const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
document.write(result);