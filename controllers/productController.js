const db = require("../models");

//create main odel
const Product = db.products;
const Review = db.reviews;

//main work
// create product======================

const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  const product = await Product.create(info);
  res.status(200).send(product);
  console.log(product);
};

//get all products ===========================

const getAllProducts = async (req, res) => {
  let products = await Product.findAll({});
  res.status(200).send(products);
};

//getOneProduct =============================

const getOneProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({ where: {id: id} });
  res.status(200).send(product);
};
