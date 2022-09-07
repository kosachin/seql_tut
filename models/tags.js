module.exports = (sequelize, DataTypes) => {
  const tagsModel = sequelize.define("tags", {
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return tagsModel;
};
