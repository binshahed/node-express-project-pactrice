const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send("<h1>Node Mission Start</h1>");
});

const users = [
  { id: 0, name: "Shahed", email: "name@gmail.com" },
  { id: 1, name: "qaium", email: "name1@gmail.com" },
  { id: 2, name: "jahir", email: "name2@gmail.com" },
  { id: 3, name: "Miraj", email: "name2@gmail.com" },
  { id: 4, name: "Saymun", email: "name2@gmail.com" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.post("/users", (req, res) => {
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser)
  res.json(newUser);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("listing to port:", port);
});
