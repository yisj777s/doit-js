//13-2.프로미스
//13-2-1.promise 객체 만들기
//프로미스의 동작 방법 살펴보기
let likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza)
    resolve('피자를 주문합니다.');
  else
    reject('피자를 주문하지 않습니다.');
})

console.log(pizza);