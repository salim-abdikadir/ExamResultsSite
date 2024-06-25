const express = require("express");
const Student = require("../modals/Student");
const router = express.Router();

const adminLayout = "../views/layouts/admin.ejs";

router.get("/", async (req, res) => {
  try {
    const data = await Student.find().sort({ firstName: 1 });
    res.json(data);
  } catch (err) {
    res.status(501).json(err);
  }
});

router.get("/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Student.findById(id);
    res.json(data);
  } catch (err) {
    res.json(err);
  }
});

router.get("/login", (req, res) => {
  try {
    res.json({ message: "login" });
  } catch (err) {
    res.json({ err });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.find({ username });
    if (!user) {
      return res.status(401).json({ message: "incorrect credintials" });
    }
    const isPasswordCorrect = bcrypt.compare();
  } catch (error) {}
});

router.get("/", (req, res) => {
  res.render("admin/index", { layout: adminLayout });
});

module.exports = router;
