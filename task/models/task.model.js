module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Task", {
    title: { type: DataTypes.STRING, allowNull: false },
    description: DataTypes.TEXT,
    priority: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM("pending", "completed"),
      defaultValue: "pending",
    },
    userId: { type: DataTypes.INTEGER, allowNull: false },
  });
};
