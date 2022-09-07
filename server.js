const express = require("express");
const app = express();

const PORT = process.env.PORT || 9000;
app.use(express.json());
const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");
const tagRouter = require("./routes/tagRouter");

// app.get("/", async (req, res) => {
//   res.send("Hello World");
// });

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/tags", tagRouter);

app.listen(PORT, () => {
  console.log(`App is listening on port : ${PORT}`);
});
