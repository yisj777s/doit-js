//13-2-5.프로미스 체이닝
//실습1 - 프로미스를 반환하는 then() 메서드 확인하기
const pizza = () => {
   return new Promise((resolve, reject) => {
    resolve("피자를 주문합니다.");
  })  
}

const step1 = (message) => {
  console.log(message);
}

pizza().then(result => step1(result));