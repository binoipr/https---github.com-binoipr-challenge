const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", require("./routes/post"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is listening to ${PORT}`);
});
