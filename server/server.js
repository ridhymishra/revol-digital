const express = require("express");
const cors = require("cors");

const app = express();   // ✅ THIS MUST COME BEFORE app.get

app.use(cors());
app.use(express.json());

/* HOME ROUTE */
app.get("/", (req, res) => {
  res.send("Portfolio API Running 🚀");
});

/* PROJECT ROUTE */
app.get("/projects", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Video Editing Portfolio",
      category: "video",
      image: "https://i.imgur.com/8Km9tLL.png",
      desc: "Professional video editing work"
    },
    {
      id: 2,
      title: "YouTube Thumbnails",
      category: "design",
      image: "https://i.imgur.com/2DhmtJ4.png",
      desc: "High CTR thumbnails design"
    }
  ]);
});

/* SERVER START */
const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running on http://localhost:5000");
});