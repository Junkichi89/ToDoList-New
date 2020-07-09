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



// 　'use strict'
  
//   let todo = {
//     content: '入力されたタスク',
//     status: '作業中',
//   }
//   const todos = [];
//   const btn = document.getElementById('btn');
//   let i = 0;

//   btn.addEventListener('click',()=> {
//     const tr = document.createElement('tr');

//   //   　 //作業中ボタン
//    function statusBtn() {
//     const tdEl_con = document.createElement('td');
//     const inpEl_con = document.createElement('button');
//     inpEl_con.textContent = "作業中";
//     tdEl_con.appendChild(inpEl_con);
//     tr.appendChild(tdEl_con);
//   }

//   // 削除ボタン
//     function delBtn() {
//       const tdEl_del = document.createElement('td');
//       const inpEl_del = document.createElement('button');
//       inpEl_del.textContent = "削除";
//       tdEl_del.appendChild(inpEl_del);
//       tr.appendChild(tdEl_del);
//     }

//    //タスク入力値
//    function showTask () {
//     const text = document.getElementById('input_task');
//     let input = text.value;
//     todo.content = input;
//     todos.push(input);
//     const tdEl_task = document.createElement('td');
//     const tdEl_num = document.createElement('td');
//     console.log(todo);
//     for (let i = 0; i < todos.length; i++){
//       console.log(todos);
//       tdEl_num.innerHTML = `${i}`;
//       tdEl_task.innerHTML = `${todos[i]}`;
//     }
//     tr.appendChild(tdEl_num);
//     tr.appendChild(tdEl_task);
    
//     text.value = '';
//     text.focus(); 

//     return statusBtn(), delBtn();
//     }
  
// showTask();
      
//       document.querySelector('table').appendChild(tr);

//   });
