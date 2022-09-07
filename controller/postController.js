const db = require("../models");
const Posts = db.posts;

const addPost = async (req, res) => {
  try {
    const post = await Posts.create({ ...req.body });
    return res.status(200).json({ post });
  } catch (err) {
    return res.status(403).json({ err: err.message });
  }
};

const getAllPost = async (req, res) => {
  try {
    const posts = await Posts.findAll();
    return res.status(200).json({ posts });
  } catch (err) {
    return res.status(403).json({ err: err.message });
  }
};

const getPost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Posts.findOne({
      where: {
        id: id,
      },
    });
    return res.status(200).json({ posts });
  } catch (err) {
    return res.status(403).json({ err: err.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Posts.update(
      { ...req.body },
      {
        where: { id: id },
      }
    );
    return res.status(200).json({ post });
  } catch (err) {
    return res.status(403).json({ err: err.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Posts.destroy({ where: { id: id } });
    return res.status(200).json({ post });
  } catch (err) {
    return res.status(403).json({ err: err.message });
  }
};


module.exports = { addPost, getAllPost, getPost, updatePost, deletePost };
