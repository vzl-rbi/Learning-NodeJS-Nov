export const questionModel = (sequelize, DataTypes) => {
  const Question = sequelize.define("question", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Image: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return Question;
};
