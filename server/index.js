const express = require("express");
const cors = require("cors");
require("dotenv").config();

const postRoutes = require("./routes/postRoutes.js");
const groupRoutes = require("./routes/groupRoutes.js");
const pollRoutes = require("./routes/pollRoutes.js");
const formRoutes = require("./routes/forumRoutes.js");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/posts", postRoutes);

// Routes
app.use("/api/posts", postRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/polls", pollRoutes);
app.use("/api/forum", formRoutes);

app.get("/", (req, res) => {
  res.send("Kelasix API is running ");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
