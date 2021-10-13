import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.listen(process.env.PORT || 3001, () =>
  console.log(`Server listening on port ${process.env.PORT || 3001}`)
);
