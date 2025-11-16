import { users, questions } from "../model/index.js";

export const renderAskQuestions = (req, res) => {
  res.render("questions/askQuestion");
};
export const askQuestion = async (req, res) => {
  const { title, description } = req.body;
  console.log(req.body);
  console.log(req.file);
  const userId = req.userId;
  const fileName = req.file.filename;
  if (!title || !description) {
    res.send("Please provide Title and Description");
  }
  await questions.create({
    title,
    description,
    image: fileName,
    userId,
  });
  res.redirect("/");
};
export const getAllQuestion = async (req, res) => {
  const data = await questions.findAll({
    include: [
      {
        model: users,
      },
    ],
  });
};
