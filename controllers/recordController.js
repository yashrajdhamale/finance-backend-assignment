const Transaction = require("../models/Transaction");

// CREATE RECORD
exports.createRecord = async (req, res) => {
  try {
    const record = await Transaction.create({
      ...req.body,
      createdBy: req.user.id, // 🔥 important
    });

    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL RECORDS + FILTER
exports.getRecords = async (req, res) => {
  try {
    const filter = {};

    if (req.query.type) filter.type = req.query.type;
    if (req.query.category) filter.category = req.query.category;
    if (req.query.date) {
      filter.date = {
        $gte: new Date(req.query.date),
        $lte: new Date(req.query.date + "T23:59:59.999Z"),
      };
    }

    const records = await Transaction.find(filter);
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE RECORD
exports.updateRecord = async (req, res) => {
  try {
    const record = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE RECORD
exports.deleteRecord = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: "Record deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
