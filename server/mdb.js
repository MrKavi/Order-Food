const mongoose = require("mongoose");
const DB_URL =
  "mongodb+srv://rohan:rohan123@cluster0.voqd8lz.mongodb.net/fooddelivery?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true });
    console.log("Connected to database");
    const fetch_data = await mongoose.connection.db.collection("items");
    const data = await fetch_data.find({}).toArray();
    // console.log(data);
  } catch (err) {
    console.log("Error connecting to database:", err);
  }
};

module.exports = mongoDB;
