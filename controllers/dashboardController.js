const Transaction = require("../models/Transaction");

exports.getSummary = async (req, res) => {
  try {
    const records = await Transaction.find({ createdBy: req.user.id });

    const totalIncome = records
      .filter((r) => r.type === "income")
      .reduce((acc, curr) => acc + curr.amount, 0);

    const totalExpense = records
      .filter((r) => r.type === "expense")
      .reduce((acc, curr) => acc + curr.amount, 0);

    const netBalance = totalIncome - totalExpense;

    res.json({
      totalIncome,
      totalExpense,
      netBalance,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};