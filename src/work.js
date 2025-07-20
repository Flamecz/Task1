const tasks = [];
let id = 0;

export function addDataToJson(body){
    const task = {
        id : id++,
        text : body.text,
        isComplete : body.isComplete
    }
    tasks.push(task);
    return task;
}

export function displayTask(id){
    return tasks.find(element => element.id == id);
}

export function displayTasks(){
    return tasks;
}

export function editTask(id, text){
    const task = tasks.find(element => element.id == id);
    console.log(text);
    task.text = text;
    return task;
}

export function deleteTask(id){
    const index = tasks.findIndex(element => element.id == id);
    if (index !== -1) {
        tasks.splice(index, 1);
        return "Done";
    }
    return "No task deleted";
}

export function markDone(id){
    const task = tasks.find(element => element.id == id);
    task.isComplete = true;
    return task;
}

export function markUndone(id){
    const task = tasks.find(element => element.id == id);
    task.isComplete = false;
    return task;
}