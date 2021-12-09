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

  let product = await Product.create(info);
  res.status(200).send(product);
  // console.log(product);
};

//get all products ===========================

const getAllProducts = async (req, res) => {
  let allproducts = await Product.findAll({});

  console.log(allproducts);
  res.status(200).send(allproducts);
};

//getOneProduct =============================

const getOneProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
};

//update product ===========================

const updateProduct = async (req, res) => {
  let id = req.params.id;

  let product = await Product.update(req.body, { where: { id: id } });

  res.status(200).send(product);
};

//delete product by id ======================

const deleteProduct = async (req, res) => {
  let id = req.params.id;

  await Product.destroy({ where: { id: id } });

  res.status(200).send("successfully deleted....");
};

//publish product ==============================

const getPublishedProducts = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });

  res.status(200).send(products);
};

//get UN-published products

const getUnpublishedProducts = async (req, res) => {
  let products = await Product.findAll({ where: { published: false } });

  res.status(200).send(products);
};

//connect one to many product and review
const getProductReviews = async (req, res) => {

  let id = req.params.id;

  let data = await Product.findAll({
    include: [{ model: Review, as: "review" }],
    where: { id: id },
  });
  res.status(200).send(data);
};

module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishedProducts,
  getUnpublishedProducts,
  getProductReviews,
};
