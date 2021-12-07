const productController = require('../controllers/productController.js')

const router = require('express').Router();

router.post('/addProduct', productController.addProduct);

router.get('/allProduct', productController.getAllProducts);

router.get('/published', productController.getPublishedProducts);

router.get('/:id', productController.getOneProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;