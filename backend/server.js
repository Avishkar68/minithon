const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB(); 
const app = express();


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Backend server is running 🚀");
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
