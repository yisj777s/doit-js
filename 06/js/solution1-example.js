//my code
const img = document.querySelector("#container img");

img.addEventListener("mouseover", () => {
  img.src = "images/pic-6.jpg";
});
img.addEventListener("mouseout", () => {
  img.src = "images/pic-1.jpg";
});

//solution 
/*
const imgBox = document.querySelector("#container > img");

imgBox.addEventListener("mouseover", function() {
  imgBox.src = "images/pic-6.jpg";
});
imgBox.addEventListener("mouseout", function() {
  imgBox.src="images/pic-1.jpg";
});
*/

