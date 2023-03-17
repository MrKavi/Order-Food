const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/createuser", async (req, res) => {
  try {
    await User.create({
      name: "kvi",
      password: "123456",
      email: "kavin123@gmail.com",
      location: "mumbai",
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;

//   name: req.body.name,        ..... when we use postman json post body
//   password: req.body.password,
