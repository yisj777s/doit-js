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
  }, 3000);
});

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