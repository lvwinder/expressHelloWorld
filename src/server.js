const express = require("express");
const { helloWorld } = require("./controllers");
const app = express();

app.use(express.json());

app.post("/hello", helloWorld);

app.listen(5000, () => {
    console.log("Listening on port 5000");
});