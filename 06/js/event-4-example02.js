const button = document.querySelector("button");

function changeBackground() {
  document.body.style.backgroundColor = "skyblue";
}

button.addEventListener("click",changeBackground);