import express from "express";
import { TaskManager } from "./work.js";
import sequelize from './database.js';
import Task from './Task.js'

const app = express();
const port = 3000;
app.use(express.json());

const taskManager = new TaskManager();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/createtask', async (req,res) => {
  try{
    const result = await taskManager.addDataToJson(
      req.body
    );
    res.status(201).json(result);
  }catch(error){
    console.error('Chyba při vytváření úkolu:', error);
    res.status(500).send('Chyba serveru: ' + error.message);
  }
})

app.get('/viewtask/:id', (req, res) => {
  const task = taskManager.displayTask(req.params.id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).send('Úkol nenalezen');
  }
})

app.get('/viewtasks', (req, res) => {
  const tasks = taskManager.displayTasks();
  if(tasks) {
    res.json(tasks);
  }else{
    res.status(404).send('Úkol nenalezen');
  }
})

app.post('/edittask/:id', (req, res) => {
  try{
    const validated = req.body;
    const result = taskManager.editTask(
      req.params.id,
      validated.text
    );
    res.status(201).json(result);
  }catch(error){
    console.error('Chyba při vytváření úkolu:', error);
    res.status(500).send('Chyba serveru: ' + error.message);
  }
})

app.delete("/deletetask/:id", (req,res) => {
  try {
    const result = taskManager.deleteTask(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    console.error('Chyba při mazání úkolu:', error.message);
    res.status(404).send('Úkol nenalezen: ' + error.message);
  }
})

app.post('/markdone/:id', (req, res) => {
  try{
    const result = taskManager.markDone(req.params.id);
    res.status(200).json(result);
  }catch(error){
    console.error('Chyba při mazání úkolu:', error.message);
    res.status(404).send('Úkol nenalezen: ' + error.message);
  }
})

app.post('/markundone/:id', (req, res) => {
  try{
    const result = taskManager.markUndone(req.params.id);
    res.status(200).json(result);
  }catch(error){
    console.error('Chyba při mazání úkolu:', error.message);
    res.status(404).send('Úkol nenalezen: ' + error.message);
  }
})