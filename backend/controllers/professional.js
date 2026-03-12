const mongodb = require('../db/connect');

exports.getData = async (req, res, next) => {
  try {

    const db = mongodb.getDb().db(); 
    

    const result = await db.collection('professional').find().toArray();

    if (result.length > 0) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result[0]);
    } else {
      res.status(404).json({ message: "No data found in collection" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message || "Some error occurred" });
  }
};