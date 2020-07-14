'use strict';

const btn = document.getElementById('btn');
const todos = [];
const todo = {
  task: '',
  status: '作業中',
};
let index = 0;

btn.addEventListener('click', () => {
  const tr = document.createElement('tr');
  let text = document.getElementById('input_task');
  todo.task = text.value;
  todos.push(todo);

  //Todoを表示させる
  const displayTodos = () => {
    const tdTask = document.createElement('td');
    const tdNum = document.createElement('td');
    for (let index = 0; index < todos.length; index++) {
      tdNum.innerHTML = `${index}`;
      tdTask.innerHTML = `${todos[index].task}`;
    }
    // 状態ボタン（通常は作業中）
    const statusBtn = () => {
      const tdStatus = document.createElement('td');
      const statusBtn = document.createElement('button');
      statusBtn.textContent = todos[index].status;
      tdStatus.appendChild(statusBtn);
      tr.appendChild(tdStatus);
      return tdStatus;
    }

    //  削除ボタン
    const delBtn = () => {
      const tdDelete = document.createElement('td');
      const delBtn = document.createElement('button');
      delBtn.textContent = '削除';
      tdDelete.appendChild(delBtn);
      tr.appendChild(tdDelete);
      return tdDelete;
    }

    tr.appendChild(tdNum);
    tr.appendChild(tdTask);
    const statusButton = statusBtn();
    const deleteButton = delBtn();
    statusButton;
    deleteButton;
    text.value = '';
    text.focus();
  }
  displayTodos();
  document.querySelector('table').appendChild(tr);
});
