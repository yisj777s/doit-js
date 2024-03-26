const email = document.querySelector("#userEmail");
const button = document.querySelector("button");
const result = document.querySelector("#result");

// 사용자 이름 세 자리만 표시
// button.addEventListener("click", function(){
//   let username, domain;
  
//   if(email.value !== "") {
//     username = email.value.split("@")[0] // @ 기준 앞부분.
//     username = username.substring(0, 3); // 세 자리만
//     domain = email.value.split("@")[1];
//     result.innerText = `${username}...@${domain}`;
//     email.value = "";
//   }
// });

// 사용자 이름 절반만 표시
button.addEventListener("click", function(){
  let username, domain, half;
  
  if(email.value !== "") {
    username = email.value.split("@")[0] // @ 기준 앞부분.
    half = username.length / 2;
    username = username.substring(0, half); // username에서 절반으로 나눈 위치까지만 추출.
    domain = email.value.split("@")[1];
    result.innerText = `${username}...@${domain}`;
    email.value = "";
  }
});