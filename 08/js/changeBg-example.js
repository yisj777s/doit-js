function changeBg() {
  const bgCount = 5; // 이미지 개수
  let randomNumber = Math.floor(Math.random() * bgCount) + 1; // 1과 bgCount 사이의 수
  //console.log(randomNumber);
  document.body.style.backgroundImage = `url(images/bg-${randomNumber}.jpg)`;
}

document.addEventListener("load", changeBg());