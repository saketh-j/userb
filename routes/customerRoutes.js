
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');


router.get('/customers', customerController.getAllCustomers);
router.post('/customers', customerController.addCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);

module.exports = router;
