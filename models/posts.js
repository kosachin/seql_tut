module.exports = (sequelize, DataTypes) => {
  const postModel = sequelize.define("posts", {
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    tags: [{ type: DataTypes.STRING }],
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return postModel;
}
