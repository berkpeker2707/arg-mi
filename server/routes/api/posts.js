const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Bringing Models
const Post = require("../../models/Post");

//Routes
//GET Request api/posts
//GET All Posts
//access Public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then((posts) => res.json(posts));
});

//POST Request api/posts
//Create A Posts
//access Private
router.post("/", auth, (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    text: req.body.text,
  });

  newPost.save().then((post) => res.json(post));
});

//DELETE Request api/posts:id
//DELETE A Posts
//access Private
router.delete("/:id", auth, (req, res) => {
  Post.findById(req.params.id)
    .then((post) => post.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
