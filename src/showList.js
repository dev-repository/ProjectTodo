import { getTodo } from "./getTodo.js";
import { newItem } from "./newItem.js";
import { listAllDelete } from './listAllDelete.js';

const listTodo = document.querySelector(".todoList");
const iptTodo = document.getElementById("iptTodo");
const allDelBtn = document.getElementById("allDelBtn");
const listNumber = document.getElementsByClassName("listNum");

export function showList(){
    let getLocal = localStorage.getItem("New Todo");
    let arrTodo = typeof getLocal === "undefined" ? getTodo() : JSON.parse(getLocal);

    console.log(`arrTodo List =====> ${arrTodo}`);
    
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
    
    listNumber.textContent = arrTodo.length;
   
    console.log(`arrTodo Count =======> ${arrTodo.length}`);
    console.log(`listNumber =======> ${listNumber.textContent = arrTodo.length}`);

    listTodo.innerHTML = Html;
    iptTodo.value = "";

    listAllDelete();
}