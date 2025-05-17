// server/controllers/forumController.js
exports.createThread = (req, res) => {
  const { title, content, author } = req.body;
  if (!title || !content || !author) {
    return res.status(400).json({ error: "Title, content, and author are required" });
  }

  console.log(`New thread by ${author}: ${title}`);
  res.status(201).json({ message: "Thread created", title, content, author });
};
