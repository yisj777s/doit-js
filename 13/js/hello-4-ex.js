//13-4.async 함수와 await 예약어
//13-4-1.async 함수
//13-4-1-4.async로 프로미스 연결하기
async function whatsYourFavorite() {
  let fav = "Javascript"
  return fav;
}

async function displaySubject(subject) {
  return `Hello, ${subject}`;
}

whatsYourFavorite()
  .then(displaySubject)
  .then(console.log);