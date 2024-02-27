const title = document.querySelector("#title"); // 제목 부분을 가져옵니다.
const userName = document.querySelector("#desc p"); // 이름 부분을 가져옵니다.
const pfImage = document.querySelector("#profile img"); // 프로필 이미지를 가져옵니다.

title.onclick = () => title.innerText = "프로필";
userName.onclick = () => userName.innerHTML = `이름 : <b>민들레</b>`;
pfImage.onclick = () => pfImage.src = "images/pf2.png";