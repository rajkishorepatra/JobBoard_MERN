const express = require("express");
const userRoute = express.Router();
const { UserModel } = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRoute.get("/", (req, res) => {
  res.send("User Registration");
});

userRoute.post("/register", async (req, res) => {
  const { name, email,password } = req.body;
  try {
    const findUser = await UserModel.find({ email });
    if(!findUser){
      res.status(200).json({
        message:"user data already present"
      })
    }
    else{
      const hased = await bcrypt.hash(password, 3);
      const user = new UserModel({
        name,
        email,
        hased
      });
      await user.save();
      res.status(200).json({
        message:"User registered successfully",
        user
      })
      //res.send("user");
    }
  } catch (err) {
    res.send({ msg: err });
  }
});

userRoute.get("/getallusers",async(req,res)=>{
  const users=await UserModel.find();
  res.status(200).json({
    users
  })
})

userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const findUser = await UserModel.findOne({ email });
    if (!findUser) {
      // bcrypt.compare(pass, findUser.password, (err, hashed) => {
      //   if (hashed) {
      //     const token = jwt.sign({ userID: findUser._id }, "om");
      //     res.send({ msg: "Successfully Logged In", token: token });
      //   } else {
      //     res.send({ msg: "wrong credentials" });
      //   }
      // });
      res.status(400).json({
        message:"please regiter to login"
      })
    } else {
      const check = await bcrypt.compare(findUser.password, password)
      if(!check){
        res.status(500).json({
          message:"Username or password is wrong"
        })
      }
      const token =jwt.sign({userID : findUser._id}, "om");
      res.status(200).json({
        message:"login successful",
        token,
      })
    }
  } catch (error) {
    res.send({ messaage: error });
  }
});

module.exports = { userRoute };
