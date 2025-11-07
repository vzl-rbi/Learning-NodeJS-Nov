export const blogModel = (sequelize, DataTypes) => {
  const Blog = sequelize.define("blog", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  // This will alter the table to match the model
  // Blog.sync({ alter: true }).then(() => {
  //   console.log("Blog table altered to match new schema!");
  // });
  return Blog;
};
