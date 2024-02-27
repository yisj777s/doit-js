//my code
function gcdivisor(n1, n2) { 
  let number = 0;
  let bigNumber = 0;
  if(n1 > n2 ? bigNumber = n1 : bigNumber = n2)
  for(let i = 0; i <= bigNumber; i++){
    if(n1 % i === 0 && n2 % i === 0){
      number = i;
    }
  }
  return console.log(`${n1}과 ${n2}의 최대공약수 : ${number}`);
}

let userNumber1 = parseInt(prompt("첫 번째 수를 입력하세요."));
let userNumber2 = parseInt(prompt("두 번째 수를 입력하세요."));

gcdivisor(userNumber1, userNumber2);

/* solution-2.js
// 최대공약수 : Greatest Common Divisor (GCD)

function getGCD(n, m) {
  let max = n > m ? n : m;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (n % i === 0 && m % i === 0) {
      GCD = i;   // 최대공약수
    }
  }
  return GCD;
}

console.log(`308과 20의 최대공약수 : ${getGCD(308, 20)}`);
console.log(`45과 38의 최대공약수 : ${getGCD(45, 38)}`);
*/
