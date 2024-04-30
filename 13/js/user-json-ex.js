// fetch("https://jsonplaceholder.typicode.com/users", {method: "GET"})
// .then(response => response.json())
// .then(users => console.log(users))

async function init() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);
}
init();