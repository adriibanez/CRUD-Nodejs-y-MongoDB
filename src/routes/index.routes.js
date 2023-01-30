import { Router } from "express";
import {
  renderTasks,
  createTask,
  renderEditTask,
  editTask,
  deleteTask,
  toggleDoneTask,
  renderAbout,
} from "../controller/task.controller";

const router = Router();

//Render Index
router.get("/", renderTasks);

//Add
router.post("/tasks/add", createTask);

//Redirección pantalla about
router.get("/tasks/about", renderAbout);

//Redirección pantalla edit
router.get("/tasks/:id/edit", renderEditTask);

//Edit
router.post("/tasks/:id/edit", editTask);

//Delete
router.get("/tasks/:id/delete", deleteTask);

//Toggle Done
router.get("/tasks/:id/toggleDone", toggleDoneTask);

export default router;
