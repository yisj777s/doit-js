let userNumber = parseInt(prompt("1보다 큰 숫자를 입력하세요."));
let sum = 0;

if (userNumber !== null && userNumber > 1) {
  for (let i = 2; i <= userNumber; i++) {
    if (i % 2 === 1) {
      continue;
    } else if (i % 2 === 0){
      sum += i;
      document.write(`${i} ----- ${sum}<br>`);
    }
  }
}