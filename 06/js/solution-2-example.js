//my code
const bttn = document.querySelector("#bttn");
const nav = document.querySelector("#nav");

bttn.addEventListener("click", () => {
  nav.classList.toggle("active");
  bttn.classList.toggle("active");
});

//solution
/*
const bttn = document.getElementById('bttn');
const nav = document.getElementById('nav');

bttn.addEventListener('click', () => { 
  nav.classList.toggle('active');
  bttn.classList.toggle('active');
});
*/