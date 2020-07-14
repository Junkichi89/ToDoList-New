'use strict';

const btn = document.getElementById('btn');
const todos = [];
const todo = {
  task:'',
  status: '作業中',
};
let i = 0;

btn.addEventListener('click', () => {
  const tr = document.createElement('tr');
  let text = document.getElementById('input_task');
  let textValue = text.value;
  todo.task = textValue;
  todos.push(todo);
  

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
