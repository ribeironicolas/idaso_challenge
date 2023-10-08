const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const urlRoutes = require("./routes/url");
const URL = require("./models/url");
const { connectToMongoDB } = require("./connect");

const app = express();
const PORT = process.env.PORT || 4000;

connectToMongoDB("mongodb://mongo:27017/short-url").then(() =>
  console.log("Mongodb connected")
);

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/url", urlRoutes);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at Port ${PORT}`));
