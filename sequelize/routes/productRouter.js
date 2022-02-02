const express = require('express')
const router = express.Router()
const productControl = require('../controllers/productController.js')
router.post('/addProduct',productControl.create)


module.exports = router;