//13-4.async 함수와 await 예약어
//13-4-1.async 함수
//13-4-1-3.프로미스 체이닝
function wahtsYourFavorite() {
  let fav = "Javascript"
  return new Promise((resolve, reject) => resolve(fav));
}

function displaySubject(subject) {
  return new Promise((res, rej) => res(`Hello, ${subject}`));
}

wahtsYourFavorite()
.then(displaySubject) // .then(response => displaySubject(response))
.then(console.log); // .then(result => console.log(result));