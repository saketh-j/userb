
const Customer = require('../models/customerModel');

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.addCustomer = async (req, res) => {
  const customerData = req.body;
  try {
    const customer = new Customer(customerData);
    const savedCustomer = await customer.save();
    res.json(savedCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteCustomer = async (req, res) => {
  const customerId = req.params.id;
  try {
    await Customer.findByIdAndDelete(customerId);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
