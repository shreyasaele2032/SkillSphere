const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

mongoose.connect(
  "mongodb://127.0.0.1:27017/skillsphere"
)
.then(async () => {

  const existingAdmin = await User.findOne({
    email: "admin@skillsphere.com"
  });

  if(existingAdmin){
    console.log("Admin already exists");
    process.exit();
  }


  const admin = await User.create({

    name: "SkillSphere Admin",

    email: "admin@skillsphere.com",

    password: "admin123",

    role: "admin"

  });


  console.log("Admin created successfully");
  process.exit();

})
.catch((err)=>{
  console.log(err);
});