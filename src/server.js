const express = require("express");
const cors = require("cors");
const todosRoutes = require("./todos.routes");

const app = express();

app.set("trust proxy", 1)
app.use(express.json());
app.use(cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
    "Access-Control-Allow-Origin": "",
}
));
app.use(todosRoutes);

app.get("/health", (req,res) =>{
    return res.json("up");
});

app.listen(3333, () => console.log("Server up in 3333"))