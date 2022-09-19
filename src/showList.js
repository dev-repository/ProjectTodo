import { getTodo } from "./getTodo.js";
import { newItem } from "./newItem.js";

const listTodo = document.querySelector(".todoList");
const iptTodo = document.getElementById("iptTodo");
const allDelBtn = document.getElementById("allDelBtn");


export function showList(){
    let getLocal = localStorage.getItem("New Todo");
    let arrTodo = typeof getLocal === "undefined" ? getTodo() : JSON.parse(getLocal);

    console.log(`arrTodo =====> ${arrTodo}`);
    
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

    listTodo.innerHTML = Html;
    iptTodo.value = "";

}