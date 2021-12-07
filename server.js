const express = require("express");
const cors = require("cors");

const app = express();

let corOption = {
  origin: "https://localhost:5000",
};

//middlewares===================================
app.use(cors(corOption));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// testing API =================================
app.get("/", (req, res) => {
  res.json({ message: "hello from api!" });
});

// port ========================================
const PORT = process.env.PORT || 5000;

//server ========================================
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
