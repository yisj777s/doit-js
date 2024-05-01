fetch("https://dummyjson.com/quotes")
.then(response => response.json())
.then(data => {
  const quote = document.querySelector("#result .quote");
  const author = document.querySelector("#result .author");
  let randomNumber = Math.floor((Math.random() * 29) + 1);
  console.log(data.quotes[randomNumber])
  console.log(data.quotes[randomNumber].id)
  console.log(data.quotes[randomNumber].quote)
  console.log(data.quotes[randomNumber].author)
  quote.innerText = `${data.quotes[randomNumber].quote}`;
  author.innerText = `- ${data.quotes[randomNumber].author}`;
})
.catch(console.log);

// solution
// const quotesURL = "http://dummyjson.com/quotes";

// fetch(quotesURL)
//   .then(response => response.json())
//   .then(data => {
//     const result = document.querySelector("#result");
//     const random = Math.floor(Math.random() * 30);  // 0 ~ 29 사이의 수
//     result.querySelector(".quote").innerHTML = data.quotes[random].quote;
//     result.querySelector(".author").innerHTML = ` - ${data.quotes[random].author}`;
//   })
//   .catch(error => console.log(error));