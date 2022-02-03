const express = require('express')
const router = express.Router()
const productControl = require('../controllers/productController.js')
router.post('/addProduct',productControl.addProduct);
router.put('/updateProduct/:id',productControl.updateProduct);
router.delete('/deleteProduct/:id',productControl.deleteProduct);
router.get('/getOneProduct/:id',productControl.getOneProduct);
router.get('/getSpecificAttrib',productControl.getSpecificAttrib);
router.get('/getWhereClause/:id',productControl.getWhereClause);
router.get('/Finders/:id',productControl.Finders);

module.exports = router;