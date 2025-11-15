export const answerModel = (sequelize, DataTypes) => {
  const Answer = sequelize.define("answer", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Answer;
};
