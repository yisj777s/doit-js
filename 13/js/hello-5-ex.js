//13-4.async 함수와 await 예약어
//13-4-2.await 예약어
//13-4-2-1.await 사용하기
async function whatsYourFavorite() {
  let fav = "Javascript"
  return fav;
}

async function displaySubject(subject) {
  return `Hello, ${subject}`;
}

async function init() {
  const response = await whatsYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
}

init();