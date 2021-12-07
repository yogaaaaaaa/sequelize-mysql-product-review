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

//router =====================================
const router = require('./routes/productRoute.js')
app.use('/api/products', router)


// port ========================================
const PORT = process.env.PORT || 5000;

//server ========================================
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});