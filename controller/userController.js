const { Op } = require("sequelize");
const db = require("../models");
const Users = db.users;
const Posts = db.posts;

const addUser = async (req, res) => {
  try {
    const data = await Users.create({
      ...req.body,
    });

    res.status(200).json({ data });
  } catch (err) {
    res.status(403).send({ error: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: {
        exclude: ["updatedAt", "middle_name"],
        include: [["dob", "DOB"]],
      },
      order: [["id", "DESC"]],
      offset: 0,
      limit: 100,
    });
    res.status(200).json({ users });
  } catch (err) {
    res.status(403).send({ error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.findOne({ where: { id: { [Op.eq]: id } } });
    res.status(200).json({ user });
  } catch (err) {
    res.status(403).send({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.update(req.body, { where: { id: id } });
    res.status(200).json({ user });
  } catch (err) {
    res.status(403).send({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.destroy({ where: { id: id } });
    res.status(200).json({ user });
  } catch (err) {
    res.status(403).send({ error: err.message });
  }
};

const getUserPosts = async (req, res) => {
  try {
    const id = req.params.id;
    const posts = await Users.findAll({
      where: { id: id },
      include: [
        {
          model: Posts,
          as: "post_details",
          attributes: ["title", "description"],
        },
      ],
    });
    res.status(200).json({ posts });
  } catch (err) {
    res.status(403).send({ error: err.message });
  }
};

module.exports = {
  addUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  getUserPosts,
};
