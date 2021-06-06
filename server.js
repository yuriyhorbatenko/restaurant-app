import express from "express";
import {readdirSync} from "fs";
import cors from "cors";
import mongoose from "mongoose";
require("dotenv").config();

const morgan = require("morgan");
const app = express();

// db connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => console.log("Database Connected"))
.catch((err) => console.log("Database Connection Error: ", err))

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// route middleware
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("======== Server listening on " + port));