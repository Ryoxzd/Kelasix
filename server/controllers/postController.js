// server/controllers/postController.js
exports.createPost = (req, res) => {
  const { author, content } = req.body;
  if (!author || !content) {
    return res.status(400).json({ error: "Author and content are required" });
  }

  // Simulasi simpan (belum ke Firebase)
  console.log(`New post from ${author}: ${content}`);
  res.status(201).json({ message: "Post created", author, content });
};
