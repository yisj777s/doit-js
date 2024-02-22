let userNumber = prompt("숫자를 입력하세요.");

if (userNumber !== null) {
  userNumber = parseInt(userNumber); // null이 아니면 정수로 변환합니다.
  (userNumber % 2 === 0) ? alert(`${userNumber} : 짝수`) : alert(`${userNumber} : 홀수`);
}
