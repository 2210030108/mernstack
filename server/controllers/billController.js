const Bill = require('../schema/bill');

// Get all bills
exports.getAllBills = async (req, res) => {
  try {
    const bills = await Bill.find().populate('medicines');
    res.json(bills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new bill
exports.createBill = async (req, res) => {
  const { medicines, totalAmount, customerInfo } = req.body;

  const bill = new Bill({
    medicines,
    totalAmount,
    customerInfo,
  });

  try {
    const newBill = await bill.save();
    res.status(201).json(newBill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Add other bill controller functions as needed
