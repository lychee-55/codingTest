// console.log('dusruf');
const newTodoInput = document.querySelector('#new_todo_input');
const todoList = document.querySelector('.todo_list');

function addTodo() {
  const newTodoInputValue = newTodoInput.value.trim();

  if (newTodoInputValue === '') {
    alert('할일을 작성해주세요!');
  } else {
    const newTodo = `
        <div class="newTodo">
        <div class="newTodoContent">
        
        <input type="checkbox" class="checkbox" />
        <span id="todoComment"> ${newTodoInputValue} </span>
        </div>
        <button onclick="deleteTodo(this)">삭제</button>
      </div>
        `;

    todoList.insertAdjacentHTML('beforeend', newTodo);

    newTodoInput.value = '';
  }
}

newTodoInput.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    addTodo();
  }
});

function deleteTodo(button) {
  button.parentElement.remove();
}

todoList.addEventListener('change', event => {
  if (event.target && event.target.classList.contains('checkbox')) {
    const todoItem = event.target.closest('.newTodo');
    todoItem.classList.toggle('done');
  }
});
