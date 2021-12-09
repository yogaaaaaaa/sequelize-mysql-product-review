//import controller for review and product
const productController = require("../controllers/productController.js");
const reviewController = require("../controllers/reviewController.js");

//router
const router = require("express").Router();

//Routers
router.post("/addProduct", productController.addProduct);
router.get("/allProducts", productController.getAllProducts);
router.get("/published", productController.getPublishedProducts);
router.get("/unpublished", productController.getUnpublishedProducts);
router.get("/:id", productController.getOneProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

//review routers
router.post("/addReview", reviewController.addReview);
router.get("/allReviews", reviewController.getAllReviews);

router.get("/getProductReviews", productController.getProductReviews);

module.exports = router;
