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
  const tdStatus = document.createElement('td');
  const statusBtn = document.createElement('button');
  const tdDelete = document.createElement('td');
  const delBtn = document.createElement('button');
  const tdTask = document.createElement('td');
  const tdNum = document.createElement('td');

   //Todo作成とインデックス
  for (let index = 0; index < todos.length; index++) {
    tdNum.innerHTML = `${index}`;
    tdTask.innerHTML = `${todos[index].task}`;
  }

  // 状態ボタン（通常は作業中）
  const statusBtnFunc = () => {
    statusBtn.textContent = todos[index].status;
    tdStatus.appendChild(statusBtn);
    return tdStatus;
  }
  const statusButton = statusBtnFunc();

  //  削除ボタン
  const deleteBtnFunc = () => {
    delBtn.textContent = '削除';
    tdDelete.appendChild(delBtn);
    return tdDelete;
  }
  const deleteButton = deleteBtnFunc();

  //Todoリストの表示
  const displayTodo = () => {
    tr.appendChild(tdNum);
    tr.appendChild(tdTask);
    tr.appendChild(tdStatus);
    tr.appendChild(tdDelete);
    return document.querySelector('table').appendChild(tr);
  }
  const showTodo = displayTodo();
  text.value = '';
  text.focus();
});
=======
  

  //Todoを表示させる
  const displayTodos = function() {
    const tdTask = document.createElement('td');
    const tdNum = document.createElement('td');
    for (let i = 0; i < todos.length; i++){
            tdNum.innerHTML = `${i}`;
            tdTask.innerHTML = `${todos[i].task}`;
          };

    // 状態ボタン（通常は作業中）
    function statusBtn() {
        const tdStatus = document.createElement('td');
        const statusBtn = document.createElement('button');
        statusBtn.textContent = todos[i].status;
        tdStatus.appendChild(statusBtn);
        tr.appendChild(tdStatus);
    }

    //  削除ボタン
    function delBtn() {
        const tdDelete= document.createElement('td');
        const delBtn = document.createElement('button');
        delBtn.textContent = "削除";
        tdDelete.appendChild(delBtn);
        tr.appendChild(tdDelete);
    }
        tr.appendChild(tdNum);
        tr.appendChild(tdTask);
        
        text.value = '';
        text.focus(); 
        return statusBtn(), delBtn();

    }
    displayTodos();
    document.querySelector('table').appendChild(tr);

  });