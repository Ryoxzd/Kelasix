// server/routes/forumRoutes.js
const express = require("express");
const router = express.Router();
const { createThread } = require("../controllers/forumController");

router.post("/", createThread);

module.exports = router;
