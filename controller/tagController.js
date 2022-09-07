const db = require("../models");
const Tags = db.tags;

const addTag = async (req, res) => {
  try {
    const tag = await Tags.create({ ...req.body });
    return res.status(201).send({ tag });
  } catch (error) {
    throw error;
  }
};

const getAllTags = async (req, res) => {
  try {
    const tags = await Tags.findAll();
    return res.status(200).send({ tags });
  } catch (error) {
    throw error;
  }
};

const getTag = async (req, res) => {
  try {
    const id = req.params.id;
    const tag = await Tags.findOne({ where: { id } });
    return res.status(200).send({ tag });
  } catch (error) {
    throw error;
  }
};

module.exports = { addTag, getAllTags, getTag };
