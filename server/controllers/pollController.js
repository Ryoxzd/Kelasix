// server/controllers/pollController.js
exports.createPoll = (req, res) => {
  const { question, options } = req.body;
  if (!question || !Array.isArray(options) || options.length < 2) {
    return res.status(400).json({ error: "Question and at least 2 options required" });
  }

  console.log(`New poll: ${question} with options ${options}`);
  res.status(201).json({ message: "Poll created", question, options });
};
