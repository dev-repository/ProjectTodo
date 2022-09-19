export function getTodo(){
    const data = localStorage.getItem("New Todo");
    if (!data) {
        return [];
    }
    return JSON.parse(data) ?? [];
}