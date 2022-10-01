const express = require("express");

const connectDB = require("./config/db");

const app = express();



const todo = require("./routers/todo"); 


connectDB();


app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));


app.use("/api/todo", todo); 


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});