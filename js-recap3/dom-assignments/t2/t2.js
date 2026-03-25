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

const toDoList = item => {
  const li = document.createElement('li');

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = item.id;

  if (item.completed) {
    input.checked = true;
  }
  const label = document.createElement('label');
  label.htmlFor = item.id;
  label.textContent = item.task;

  li.appendChild(input);
  li.appendChild(label);

  ul.appendChild(li);

  input.addEventListener('click', () => {
    item.completed = !item.completed;
    console.log(todoList);
  });

  const index = todoList.findIndex(({id}) => id === item.id);
};

for (const item of todoList) {
  toDoList(item);
}
