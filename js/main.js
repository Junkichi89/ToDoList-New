　'use strict'
  
  const btn = document.getElementById('btn');
  const taskList = [];
  let i = 0;

  btn.addEventListener('click',()=> {
    const tr = document.createElement('tr');

   //タスク入力値
   function inp_task () {
    const text = document.getElementById('input_task');
    let input = text.value;
    taskList.push(input);
    const tdEl_task = document.createElement('td');
    const tdEl_num = document.createElement('td');
    for (let i = 0; i < taskList.length; i++){
      tdEl_num.innerHTML = `${i}`;
      tdEl_task.innerHTML = `${taskList[i]}`;
    }
    tr.appendChild(tdEl_num);
    tr.appendChild(tdEl_task);
    text.value = '';
    text.focus(); 
    }
  

  　　 //作業中ボタン
  function con_btn() {
    const tdEl_con = document.createElement('td');
    const inpEl_con = document.createElement('input');
    inpEl_con.setAttribute("class","inp_con");
    inpEl_con.setAttribute("type","button");
    inpEl_con.setAttribute("value","作業中");
    tdEl_con.appendChild(inpEl_con);
    tr.appendChild(tdEl_con);
  }

    //削除ボタン
    function del_btn() {
      const tdEl_del = document.createElement('td');
      const inpEl_del = document.createElement('input');
      inpEl_del.setAttribute("class","inp_del");
      inpEl_del.setAttribute("type","button");
      inpEl_del.setAttribute("value","削除");
      tdEl_del.appendChild(inpEl_del);
      tr.appendChild(tdEl_del);
    }

      inp_task();
      con_btn();
      del_btn();
      
      document.querySelector('table').appendChild(tr);

  });
