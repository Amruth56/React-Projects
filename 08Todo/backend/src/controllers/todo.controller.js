import Todo from "../models/todo.js";

export const getTodos = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const status = req.query.status;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const filter = { userId: req.userId };

  if (status === "completed") filter.completed = true;
  else if (status === "pending") filter.completed = false;

  const todos = await Todo.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const total = await Todo.countDocuments(filter);

  res.json({
    todos,
    page,
    totalPages: Math.ceil(total / limit),
  });
};

export const createTodo = async (req, res) => {
  const { title, priority, dueDate } = req.body;

  const todo = await Todo.create({
    userId: req.userId,
    title,
    priority,
    dueDate,
  });

  res.status(201).json(todo);
};

export const updateTodo = async (req, res) => {
  const todo = await Todo.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    req.body,
    { new: true }
  );

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(todo);
};

export const deleteTodo = async (req, res) => {
  const deleted = await Todo.findOneAndDelete({
    _id: req.params.id,
    userId: req.userId,
  });

  if (!deleted) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json({ message: "Todo deleted successfully" });
};
