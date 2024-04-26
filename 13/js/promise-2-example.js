//13-2.프로미스
//13-2-2.promise 객체 사용하기
//13-2-2-3.성공과 실패에 상관없이 실행하는 finally
let likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza)
    resolve('피자를 주문합니다.');
  else
    reject('피자를 주문하지 않습니다.');
})
// console.log(pizza);

pizza
  .then(
    result => console.log(result)
  )
  .catch(
    err => console.log(err)
  )
  .finally(
    () => console.log('완료')
  );