const result = document.querySelector("#result");
const firstDay = new Date("2021-07-01"); 
const today = new Date();

// 시작한 날부터 오늘까지 흐른 시간(밀리초)
let passedTime = today.getTime() - firstDay.getTime();

// 밀리초를 일수로 계산.
let passedDay = Math.round(passedTime / (1000*60*60*24));

result.innerText = passedDay;