import { getTodo } from "./getTodo.js";
import { newItem } from "./newItem.js";
import { listAllDelete } from './listAllDelete.js';
import { listDelete } from "./listDelete.js";
import { dragAndDrop } from "./dragAndDrop.js"

const listTodo = document.querySelector(".todoList");
const iptTodo = document.getElementById("iptTodo");
const allDelBtn = document.getElementById("allDelBtn");
const listNumber = document.getElementsByClassName("listNum");

export function showList(){
    let arrTodo = getTodo();

    //console.log(`arrTodo List =====> ${arrTodo}`);
    
    if(arrTodo.length){
        allDelBtn.classList.add("active");
    } else{
        allDelBtn.classList.remove("active");
    }

    const Html = arrTodo
    .map((text, index) => {
        return newItem(text, index);
    })
    .join("");
    
    listNumber[0].textContent = arrTodo.length;
   
    //console.log(`arrTodo Count =======> ${arrTodo.length}`);
    //console.log(`listNumber =======> ${ listNumber.textContent = arrTodo.length}`);

    listTodo.innerHTML = Html;
    iptTodo.value = "";

    listAllDelete();
    listDelete();
    dragAndDrop();
}