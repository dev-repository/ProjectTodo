const textEl = document.getElementById("iptTodo");

export function newItem(text, index){
    return `
    <li>${text}
        <span data-idx="${index}" name="delBtn">
            <i class="fas fa-trash"></i>
        </span>
    </li>
`;
}