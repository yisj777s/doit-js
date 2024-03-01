// my code
const detail = document.querySelector("#detail");
const bttn = document.querySelector("#view");

bttn.onclick = () => {
  detail.classList.toggle("hidden");
}
/* solution
const viewBttn = document.querySelector("#view");
const detail = document.querySelector("#detail");

viewBttn.onclick = function() {
  detail.classList.toggle("hidden");
} 
*/