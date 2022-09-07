module.exports = (sequelize, DataTypes) => {
  const postTagModel = sequelize.define("postTags", {
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return postTagModel;
}
