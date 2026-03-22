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
  const li = document.createElement('li');

  li.innerHTML = `
  <input type="checkbox" ${item.completed && 'checked'} id="${item.id}" /> ${item.task} <button type="button">Delete</button>`;

  ul.appendChild(li);

  li.querySelector('input').addEventListener('click', event => {
    item.completed = !item.completed;
    console.log(todoList);
  });
  li.querySelector('button').addEventListener('click', event => {
    ul.removeChild(li);

    const index = todoList.findIndex(({id}) => id === item.id);
    todoList.splice(index, 1);
    console.log(todoList);
  });
};

for (const item of todoList) {
  addToDoItem(item);
}

const addButton = document.querySelector('button.add-btn');
console.log('addButton', addButton);
addButton.addEventListener('click', () => {
  console.log('Add button clicked');

  document.querySelector('dialog').showModal();
});

const addForm = document.querySelector('dialog form');

addForm.addEventListener('submit', event => {
  event.preventDefault();
  const task = event.currentTarget.querySelector('input').value;

  console.log('task', task);

  const item = {
    id: +new Date(),
    task,
    completed: false,
  };

  todoList.push(item);
  addToDoItem(item);
  console.log(todoList);

  document.querySelector('dialog').close();
});
