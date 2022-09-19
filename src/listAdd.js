import { getTodo } from "./getTodo.js";
import { showList } from "./showList.js";

const addBtn = document.getElementById("addBtn");
const iptTodo = document.getElementById("iptTodo");

export function listAdd(){
    iptTodo.addEventListener("keyup", (e) => {
        if (e.target.value.trim().length) {
            addBtn.classList.add('active');
            return;
        }
        addBtn.classList.remove('active');
    });

    addBtn.addEventListener("click", (e) => {
        const text = iptTodo.value;
        if (!text) return;

        const getList = getTodo();
        getList.push(text);
        localStorage.setItem("New Todo", JSON.stringify(getList));
        showList(getList);
    });
}
