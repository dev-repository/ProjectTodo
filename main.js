import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  <div id="todoList"></div>
`
setupCounter(document.querySelector('#counter'))

document.querySelector('#todoList').innerHTML = `
  <div class="search_box">
  <input type="text" class="add_todoList" placeholder="할일을 입력하시오...">
  <button type="button" id="add_btn" class="add_btn">검색</button>
  </div>
  <div id="list"></div>
`

 // totoT: input TodoList의 title
 var todoT = document.getElementsByClassName('add_todoList');
 var button = document.getElementById('add_btn');
 var list = document.getElementById('list');

 let itemList = [];

 button.addEventListener("click",addTodo);

 function addTodo(){
    let list = document.querySelector(".add_todoList").value;
    console.log(list);
    /***
     * .add_todoList에 value값이 있으면 배열안에 list값을넣고
     * value를 다시 비우고
     * focus를 input태그에다가 다시 맞춘다.
     * todoListSee()함수 실행
     */
    if(list != null){
      itemList.push(list);
      document.querySelector(".add_todoList").value = "";
      document.querySelector(".add_todoList").focus();
    }

    todoListSee();
 }

 function todoListSee(){
  /***
   * addList <div>를 감싸고
   * 
   */
  let addList = "<div class='search'>"
  let item = itemList.length;
  for(let i=0; i<itemList.length; i++){
    addList += "<div class='divBox' draggable='true'>"
    addList += "<p class='pBox'>" + itemList[i] + "</p>"
    addList += "<button class='closeBtn' id=" + i + ">x</button>"
    addList += "<button class='modifyBtn' id=mo" + i + ">수정</button>"
    addList += "</div>"
  }
  document.querySelector("#list").innerHTML = addList;
  
  console.log(item);
  
  let deleteList = document.querySelectorAll('.closeBtn');
  console.log("dddddd--->" ,deleteList);
  for(let i=0; i<deleteList.length; i++){
    deleteList[i].addEventListener("click", () => deleteItem(i));
  }

  let modiList = document.getElementsByClassName('modifyBtn');
  for(let j=0; j<modiList.length; j++){
    modiList[j].addEventListener("click", () => editItem(j));
  }

  let dragLi = document.querySelectorAll('.divBox');

  // for(let a=0; a<dragLi.length; a++){
  //   dragLi[a].addEventListener("dragstart", () => drag());
  //   dragLi[a].addEventListener("dragend", () => dragEnd());
  // }
  dragLi.forEach((todo) =>{
    todo.addEventListener('dragstart',dragstart);
    todo.addEventListener('dragend',dragend);
    todo.addEventListener('dragend',dragend);
    todo.addEventListener('dragend',dragend);
  })
 }


 function deleteItem(i){
  itemList.splice(i,1);
  todoListSee();
 }

 function editItem(j){
  console.log("클릭");
  console.log(itemList[j]);
  var value = prompt("수정", itemList[j] );
  if(value)
    {
        document.querySelector('.pBox').innerHTML = value;
    }
 }

//  function drag(){
//   console.log("222");
//  }
//  function dragEmd(){
//   console.log("end");
//  }

function dragstart(e){
  e.preventDefault();
  console.log('start');
}
function dragend(){
  this.appendChild()
  console.log('end');
}