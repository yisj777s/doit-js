const number = parseInt(prompt("자연수를 입력하세요."));
let isPrime; // 소수인지의 여부를 지정합니다. true 또는 false

if (number === 1) {
  document.write(`${number}은(는) 소수도, 합성수도 아닙니다.`);
} else if (number === 2) {
  isPrime = true; // 숫자 2는 당연히 소수입니다.
} else {
  for (let i = 2; i < number; i++){
    if (number % i === 0){ // 나누어떨어지는 수가 있다면
      isPrime = false;  // 소수가 아닙니다.
      break;  // for문을 빠져나옵니다.
    } else {  // 나누어떨어지는 수가 없다면
      isPrime = true; // 소수입니다.
    }
  }
}

if (isPrime) {
  document.write(`${number}는 소수입니다.`);
} else {
  document.write(`${number}는 소수가 아닙니다.`);
}