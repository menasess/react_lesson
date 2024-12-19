const time = ['09:00', '11:00', '12:30', '14:00', '16:45'];
const todo = ['수업', '과제', '점심식사', '주간회의', '자료조사'];

// let result = '<th>TIME</th>';
// for (let td of time) {
//     result += `<td>${td}</td>`;
// }
// document.getElementById('time').innerHTML = result;

// result = '<th>TODO</th>';
// for (let td of todo) {
//     result += `<td>${td}</td>`;
// }
// document.getElementById('todo').innerHTML = result;
function table(time, todo) {
    let result = `<th>${time.header}</th>`;
    for (let td of time.data) {
        result += `<td>${td}</td>`;
    }
    document.getElementById(todo).innerHTML = result;
}

table({ header: 'TIME', data: time }, 'time');
table({ header: 'TODO', data: todo }, 'todo');


function add() {
    const addTime = document.getElementById("addTime");
    const addTodo = document.getElementById("addTodo");

    if (addTime.value.trim() === "") {
        alert("시간을 입력하세요");
        addTime.focus();
        return;
    }
    if (addTodo.value.trim() === "") {
        alert("할 일을 입력하세요");
        addTodo.focus();
        return;
    }

    console.log("시간: ", addTime.value);
    console.log("할 일: ", addTodo.value);

    
    const timeTd = document.createElement("td");
    timeTd.textContent = addTime.value;

    const todoTd = document.createElement("td");
    todoTd.textContent = addTodo.value;

   
    document.getElementById('time').appendChild(timeTd);
    document.getElementById('todo').appendChild(todoTd);

    
    addTime.value = "";
    addTodo.value = "";
}
