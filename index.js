const User = require("./models").user;
const TodoList = require("./models").todoList;
const express = require("express");
const app = express();
const PORT = 4000;
const serverMessage = (arg) =>
  console.log(`Your server is running on PORT: ${arg}`);

app.use(express.json());

app.post("/echo", (req, res) => {
  res.json(req.body);
});

app.post("/users", async (req, res, next) => {
  try {
    const { name, email } = req.body;
    if (!email || !name || email === " " || name === " ") {
      return res
        .status(400)
        .send(
          `You need to provide a valid name and email. ${name} or ${email} doesnt exist`
        );
    }
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

app.get("/users/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    console.log(req.params.userId);
    if (!userId) {
      return res
        .status(400)
        .send(`No user with id: ${userId} in our database.`);
    }
    const userById = await User.findByPk(userId);
    res.json(userById);
  } catch (error) {
    next(error);
  }
});

app.put("/users/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const userToUpdate = await User.findByPk(userId);
    if (!userToUpdate) {
      res.status(404).send("User not found");
    } else {
      const updatedUser = await userToUpdate.update(req.body);
      res.json(updatedUser);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, {
      include: [TodoList],
    });
    if (user) {
      res.send(user.todoLists);
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, serverMessage(PORT));
