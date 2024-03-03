const box = document.querySelector("#box");

box.addEventListener("mousemove",(e) => {
  console.log(`이벤트의 발생 위치: ${e.pageX}, ${e.pageY}입니다.`)
});