// controllers/userController.js

const User = require("../models/User");




const getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {
    next(error);
  }
};




const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(
      req.params.id
    ).select("-password");


    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }


    res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {
    next(error);
  }
};




const updateProfile = async (req, res, next) => {
  try {

    const {
      name,
      bio,
      location,
      skills,
      portfolio,
      profileImage,
    } = req.body;


    const user = await User.findById(
      req.user._id
    );


    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }


    user.name =
      name || user.name;

    user.bio =
      bio || user.bio;

    user.location =
      location || user.location;

    user.skills =
      skills || user.skills;

    user.portfolio =
      portfolio || user.portfolio;

    user.profileImage =
      profileImage || user.profileImage;


    const updatedUser =
      await user.save();


    res.status(200).json({
      success: true,
      message: "Profile updated successfully",

      user: {
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
        bio: updatedUser.bio,
        skills: updatedUser.skills,
        portfolio: updatedUser.portfolio,
      },
    });


  } catch (error) {
    next(error);
  }
};




const getFreelancers = async (req, res, next) => {
  try {

    const freelancers =
      await User.find({
        role: "freelancer",
      }).select("-password");


    res.status(200).json({
      success: true,
      freelancers,
    });


  } catch (error) {
    next(error);
  }
};



module.exports = {
  getProfile,
  getUserById,
  updateProfile,
  getFreelancers,
};