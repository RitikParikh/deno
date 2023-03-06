// @deno-types="npm:@types/express"
import express from "npm:express@4.18";

const app= express();

app.get("/", (req, res) => {
    res.send("Working Fine👻");
});

app.listen(6969, () => console.log("Running on http://localhost:6969"));