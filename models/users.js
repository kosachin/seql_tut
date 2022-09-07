module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("user", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "first_name field is required" },
      },
    },
    middle_name: DataTypes.STRING,
    last_name: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: false,
      validate: {
        notNull: { msg: "last_name field is required" },
      },
    },
    username: {
      type: DataTypes.STRING,
      defaultValues: "",
      unique: { args: true, msg: "A user with this username already exists" },
      allowNull: false,
      validate: {
        notNull: { msg: "username field is required" },
      },
    },
    email: {
      type: DataTypes.STRING,
      defaultValues: "",
      unique: { args: true, msg: "A user with this email already exists" },
      allowNull: false,
      validate: {
        notNull: { msg: "email field is required" },
      },
    },
    dob: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: { msg: "Birthdate must be a valid date" },
        notNull: { msg: "dob filed is required" },
      },
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [["male", "female", "others"]],
          msg: 'Gender must match "male" or "female" or "others"',
        },
        notNull: {
          msg: "gender field is required",
        },
      },
      allowNull: false,
    },
  });
  return Users;
};
