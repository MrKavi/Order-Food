const mongoose = require("mongoose");
const DB_URL = "abc";

const mongoDB = async () => {
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true });
    console.log("Connected to database");
    const itemsCollection = await mongoose.connection.db.collection("items");
    const data = await itemsCollection.find({}).toArray();
    const categoryCollection = await mongoose.connection.db.collection(
      "category"
    );
    const catData = await categoryCollection.find({}).toArray();
    global.items = data;
    global.foodCategory = catData;
  } catch (err) {
    console.log("Error connecting to database:", err);
  }
};

module.exports = mongoDB;
