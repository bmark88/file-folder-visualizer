import express from "express";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.post("/files", (req, res) => {
  if (!req.body.directory) {
    return res.status(400).json({ error: "No directory was provided" });
  }
  const __dirname = path.dirname(req.body.directory);
  const baseName = path.basename(req.body.directory);
  const extName = path.extname(req.body.directory);
  const srcDirectory = path.join(__dirname, baseName);

  if (srcDirectory[0] !== "/") {
    // All directories must start with a forward slash
    return res.status(400).json({ error: "Not a valid directory" });
  }
  console.log({ __dirname, baseName, srcDirectory, extName });

  fs.readdir(srcDirectory, function (error, files) {
    if (error) {
      throw Error(
        "The directory provided does not exist, please make sure you provide a valid directory beginning with '/'. Individual files are not permitted)."
      );
    }
  });

  res.send(`Directory provided: ${__dirname}`);
});

app.listen(process.env.PORT || 3001, () =>
  console.log(`Server listening on port ${process.env.PORT || 3001}`)
);
