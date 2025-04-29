import express from "express";
import login from "./auth/loing";

const app = express();

const PORT = process.env.PORT || 3000;

app.post("/login", login);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
