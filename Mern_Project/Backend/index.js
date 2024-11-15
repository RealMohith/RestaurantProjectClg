const express = require('express');
const routes = require('./Route/index');
const cors = require("cors")
const app = express();
app.use(cors())
app.use(express.json());
app.use("/api" , routes);
app.listen(8000,()=>{
    console.log("server is running on port 8000");
});