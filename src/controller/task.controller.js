import Task from "../models/Task";

//Render Index
export const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean();

  res.render("index", { tasks: tasks });
};

//Add
export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

//Redirección pantalla about
export const renderAbout = async (req, res) => {
  res.render("about");
};

//Redirección pantalla edit
export const renderEditTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();

    res.render("edit", { task });
  } catch (error) {
    console.log(error.message);
  }
};

//Edit
export const editTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

//Delete
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);

  res.redirect("/");
};

//Toggle Done
export const toggleDoneTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;

  await task.save();

  res.redirect("/");
};
