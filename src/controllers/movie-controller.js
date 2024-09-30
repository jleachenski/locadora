import Movie from "../models/movie-model.js";

export const store = async (req, res) => {
  try {
    const content = await Movie.create({
      user: req.user._id
    });

    res.status(201).json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const content = await Movie.find({
      rentedBy: undefined,
    }).exec();

    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};
