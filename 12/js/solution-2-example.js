const result = document.querySelector("#result");
const bttn = document.querySelector("button");
const number = document.querySelector("#user-number");

bttn.addEventListener("click", () => {
  try {
    if (number.value < 10) {
      result.innerText = number.value;
    } if (number.value >= 10) {
      throw "10보다 작은 수를 입력하세요.";  
    } if (number.value === "") {
      throw "숫자를 입력하세요.";  
    }
  } catch(e){
      alert(e);  
  } finally {
    number.value = "";  
  }
});

//solution
// const userNumber = document.querySelector("#user-number");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   let n = userNumber.value;
//   try {
//     if (n === "" || isNaN(n)) {
//       throw "숫자를 입력하세요.";
//     }
//     n = Number(n);  // n = parseInt(n);
//     if (n <= 10) {
//       document.querySelector("#result").innerText = n;
//     }
//     if (n > 10) {
//       throw "10보다 작은 수를 입력하세요.";
//     }    
//   } catch (err) {
//     alert(err);
//   } finally {
//     userNumber.value = "";
//   }
// });