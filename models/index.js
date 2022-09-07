const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => console.log("Connected.....!"))
  .catch((err) => console.log("Errorrr....!!!"));

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require("./users")(sequelize, DataTypes);
db.posts = require("./posts")(sequelize, DataTypes);
db.tags = require("./tags")(sequelize, DataTypes);
db.post_tag = require("./postTag")(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then(() => console.log("DB is synced"))
  .catch((err) => console.log("Error occurred while DB was syncing"));

db.users.hasMany(db.posts, { foreignKey: "user_id", as: "post_details" });
db.posts.belongsTo(db.users);

db.tags.belongsToMany(db.posts, { through: "postTags", foreignKey: "tag_id" });
// db.posts.belongsToMany(db.tags, { through: "postTags", foreignKey: "tag_id" });

module.exports = db;
