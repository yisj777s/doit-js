//my code
let userNumber1 = document.querySelector("#number1");
let userNumber2 = document.querySelector("#number2");
let calcbttn = document.querySelector("#calc");
let clacResult = document.querySelector("#result");

function getGCD(n1, n2) { 
  let big = n1 > n2 ? n1 : n2;
  let GCD = 0;
  for(let i = 1; i <= big; i++){
    if(n1 % i === 0 && n2 % i === 0){
      GCD = i;
    }
  }
  return clacResult.innerText = GCD;
}

calcbttn.onclick = () => {
  getGCD(userNumber1.value, userNumber2.value);
}

//solution
/*
const n = document.querySelector("#number1");
const m = document.querySelector("#number2");
const button = document.querySelector("button");
let result = document.querySelector("#result");

button.onclick = function() {
  result.innerText = getGCD(n.value, m.value);
}

function getGCD(n, m) {
  let max = n > m ? n : m;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (n % i === 0 && m % i === 0) {
      GCD = i;   
    }
  }
  return GCD;
}
*/