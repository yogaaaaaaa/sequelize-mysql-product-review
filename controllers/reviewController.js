const db = require("../models");

//model
const Review = db.reviews;

//function

// add review ========================

const addReview = async (req, res) => {
  let data = {
    rating: req.body.rating,
    description: req.body.description,
  };

  let review = await Review.create(data);
  res.status(200).send(review);
};

// get all reviews

const getAllReviews = async (req, res) => {
  let reviews = await Review.findAll({});

  res.status(200).send(reviews);
};

module.exports= {
    addReview, getAllReviews
}