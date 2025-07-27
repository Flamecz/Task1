import Task from './Task.js';
export class TaskManager{
    constructor(id = 0, tasks = []){
        this.id = id;
        this.tasks = tasks;
    }


    async addDataToJson(body) {
        const task = await Task.create({
            text: body.text,
            isComplete: body.isComplete || false
        });
        return task;
    }

    async displayTask(id){
        return await Task.findByPk(id);
    }

    async displayTasks(){
        return await Task.findAll();
    }

    async editTask(id, text){
        const task = await Task.findByPk(id);
        if (task) {
            task.text = text;;
            await task.save();
            return task; 
        }
        task.text = text;
        return task;
    }

    async deleteTask(id){
        const deleted = await Task.destroy({ where: { id } });
        return deleted ? "Done" : "No task deleted";
    }

    async markDone(id){
        const task = await Task.findByPk(id);
        if (task) {
            task.isComplete = true;
            await task.save();
            return task;
        } 
    }

    async markUndone(id){
        const task = await Task.findByPk(id);
        if (task){
            task.isComplete = false;
            await task.save();
            return task;
        }
    }
}