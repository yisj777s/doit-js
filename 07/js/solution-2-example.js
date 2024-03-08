//my code
const notiBox =  document.querySelector("#noti-box");
const bttn = document.querySelector("#bttn");

bttn.addEventListener("click", () => { 
  const newDiv = document.createElement("div");
  newDiv.innerText = "알림 내용이 표시됩니다.";
  newDiv.classList.add("noti");
  notiBox.appendChild(newDiv);

  setTimeout(() => {
    newDiv.remove();
<<<<<<< HEAD
  }, 3000);
});
=======
  }, 3000)
})
>>>>>>> daef269 (add example-07-마무리 문제02-버튼클릭시 알림내용메시지표시, 3초 후 메시지 자동삭제)

/* solution
const bttn = document.querySelector('#bttn');
const notiBox = document.querySelector('#noti-box');

bttn.addEventListener('click', () => {
  const noti = document.createElement('div');
  noti.classList.add('noti');
  noti.innerText = "알림 내용이 표시됩니다.";
  notiBox.appendChild(noti);

  setTimeout(() => {
    noti.remove();
  }, 3000);
});
*/