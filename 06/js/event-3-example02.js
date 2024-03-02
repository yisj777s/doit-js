//my code
const button = document.querySelector("button");
const body = document.body;

button.onclick = () => {
  body.style.backgroundColor = "skyblue";
  body.style.color = "#fff";
}

/* solution
const button = document.querySelector("button");

button.onclick = function() {
  document.body.style.backgroundColor = "#222";
  document.body.style.color = "#fff";
}
*/