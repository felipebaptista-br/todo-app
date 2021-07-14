const express = require("express");
const app = express();
const port = 3000;
const todoRoute = require("./routes/todo");

// tudo que usar essa rota será direcionado para o todoRoute
app.use("/todo", todoRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
