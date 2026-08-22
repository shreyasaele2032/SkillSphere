

const User = require("../models/User");
const generateToken = require("../utils/generateToken");


//"next" is an Express middleware function used to pass control to the next middleware. 
//When we call next(error), it passes the error to the global error-handling middleware,
//allowing us to handle errors centrally instead of repeating error-handling code in every controller.

const registerUser = async (req, res, next) => {
     console.log("REGISTER API HIT");
  try {
    const {
      name,
      email,
      password,
      role,
    } = req.body;


    
    const existingUser = await User.findOne({
      email,
    }); //used to handle the existing user

     //if user already exists it is a bad request
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }


    
    const user = await User.create({
      name,
      email,
      password,
      role,
    });  //Creates a new user in MongoDB.


    
    const token = generateToken(
      user._id,
      user.role
    );


    res.status(201).json({
      success: true,
      message: "Registration successful",

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },

      token,
    });


  } catch (error) {
    console.log("REGISTER ERROR:", error);
    next(error);
  }
};





const loginUser = async (req, res, next) => {
  try {

    const {
      email,
      password,
    } = req.body;



   
    const user = await User.findOne({
      email,
    }).select("+password"); //Include the password field this time.



    if (!user) {
      return res.status(401).json({
        success:false,
        message:"Invalid email or password",
      });
    }



    





   

    const isMatch =
      await user.matchPassword(password);



    if (!isMatch) {

      return res.status(401).json({
        success:false,
        message:"Invalid email or password",
      });

    }





    

    const token = generateToken(
      user._id,
      user.role
    );// Email correct?
    //        ↓
    //    Password correct?
    //        ↓
    //     Generate JWT
    //         ↓
    //     Send token to frontend




    res.status(200).json({

      success:true,

      message:"Login successful",


      user:{
        id:user._id,
        name:user.name,
        email:user.email,
        role:user.role,
      },


      token,

    }); //this block sends the JWT token and the user information to the frontend



  } catch(error){

    next(error);

  }
};



module.exports = {
  registerUser,
  loginUser,
};