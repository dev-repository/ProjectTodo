import { showList } from "./showList.js";

const allDelBtn = document.getElementById("allDelBtn");

export function listAllDelete(){
    allDelBtn.addEventListener("click", (e) => {
        console.log("저 클릭했어요!");
        localStorage.removeItem("New Todo");
        showList();
    });
}

