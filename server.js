import db from "./db/mongo.js";
import express from "express";
import cors from "cors";
// import logger from "morgan";
// import routes from "./routes/index.js"


const app = express();
const PORT = 4000
app.use(express.json());
app.use(cors());
// app.use(logger("dev"));


const port = 4000;


// app.use("/api", routes);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});




