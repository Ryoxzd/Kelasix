exports.createGroup = (req, res) => {
    const { name, description } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Group name is required" });
    }

    console.log(`New group: ${name} - ${description}`);
    res.status(201).json({ message: "Group created", name, description});
};