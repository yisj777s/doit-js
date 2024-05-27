//17.웹 API 활용하기
//17-2.웹 스토리지 API
//practice-17-2-2.로컬 스토리지를 활용해 할 일 목록 프로그램 만들기
//웹 요소 가져오기
const todoInput = document.querySelector('#todo-input');
const addButton = document.querySelector('#add-button');
const todoList = document.querySelector('#todo-list'); // 할 일 목록

document.addEventListener('DOMContentLoaded', getLocal);
addButton.addEventListener('click', addTodo);
todoList.addEventListener('click', manageTodo);

// localStorage.clear();  
function addTodo(e) {
  e.preventDefault(); // 기본 동작 취소.  

  const newDiv = document.createElement('div');
  newDiv.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-content');
  newDiv.appendChild(newTodo);

  const completeButton = document.createElement('button');
  completeButton.innerText = '완료';
  completeButton.classList.add('complete-button');
  newDiv.appendChild(completeButton);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = '삭제';
  deleteButton.classList.add('delete-button');
  newDiv.appendChild(deleteButton);

  saveToLocal(todoInput.value);
  
  todoList.appendChild(newDiv);
  todoInput.value = ""; 
}

function saveToLocal(todo) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getLocal() {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach((todo) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-content');
    newDiv.appendChild(newTodo);

    const completeButton = document.createElement('button');
    completeButton.innerText = '완료';
    completeButton.classList.add('complete-button');
    newDiv.appendChild(completeButton);
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '삭제';
    deleteButton.classList.add('delete-button');
    newDiv.appendChild(deleteButton);

    todoList.appendChild(newDiv);

    todoInput.value = "";
  })
}

function manageTodo(e) {
  const whichButton = e.target.classList[0]; // 클릭한 부분의 class명을 가져옴.
  if (whichButton === 'complete-button') {
    const todo = e.target.parentElement;
    todo.children[0].classList.toggle('completed');
  } else if (whichButton === 'delete-button') {
    const todo = e.target.parentElement;
    removeLocal(todo);
    todo.remove();
  }
}

function removeLocal(todo) {
  let todos; // 로컬 스토리지에서 가져온 할 일들
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  // console.log(todo);
  const index = todos.indexOf(todo.children[0].innerText);
  // console.log(index);
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}