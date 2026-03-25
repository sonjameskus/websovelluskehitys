'use strict';

// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

const ul = document.querySelector('ul');

const addToDoItem = item => {
  const list = `
    <li>
      <input type="checkbox" ${item.completed && 'checked'} id="${item.id}"/>
      <label for="todo-${item.id}">${item.task}</label>
    </li>
  `;
  ul.insertAdjacentHTML('beforeend', list);

  const lastLi = ul.lastElementChild;
  lastLi.querySelector('input').addEventListener('click', event => {
    item.completed = !item.completed;
    console.log(todoList);
  });
};
for (const item of todoList) {
  addToDoItem(item);
  console.log(todoList);
}
