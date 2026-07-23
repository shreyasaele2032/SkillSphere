const Profile = require("../models/Profile");
const User = require("../models/User");


const saveProfile = async (req, res, next) => {

  try {

    const {
      title,
      skills,
      experience,
      hourlyRate,
      location,
      bio,
      github,
      linkedin,
      portfolio,
      email,
    } = req.body;



    const resume = req.file ? req.file.path : null;




    if (email) {

      await User.findByIdAndUpdate(
        req.user._id,
        {
          email: email
        }
      );

    }



    let profile = await Profile.findOne({
      user: req.user._id,
    });




    if (profile) {


      profile.title = title;


      profile.skills =
        typeof skills === "string"
          ? JSON.parse(skills)
          : skills;



      profile.experience = experience;

      profile.hourlyRate = hourlyRate;

      profile.location = location;

      profile.bio = bio;

      profile.github = github;

      profile.linkedin = linkedin;

      profile.portfolio = portfolio;



      if (resume) {

        profile.resume = resume;

      }



      await profile.save();



    } 
    
    else {



      profile = await Profile.create({

        user: req.user._id,

        title,


        skills:
          typeof skills === "string"
            ? JSON.parse(skills)
            : skills,


        experience,

        hourlyRate,

        location,

        bio,

        github,

        linkedin,

        portfolio,

        resume,

      });


    }





   

    const updatedProfile = await Profile.findById(profile._id)
      .populate(
        "user",
        "name email role"
      );




    res.status(200).json({

      success: true,

      profile: updatedProfile,

    });



  } catch (error) {

    next(error);

  }

};








const getMyProfile = async (req, res, next) => {

  try {


    const profile = await Profile.findOne({

      user: req.user._id,

    })
    .populate(
      "user",
      "name email role"
    );



    if (!profile) {

      return res.status(404).json({

        success:false,

        message:"Profile not found",

      });

    }




    res.status(200).json({

      success:true,

      profile,

    });



  } catch(error) {

    next(error);

  }

};








// Get Profile by User ID
const getProfileByUserId = async (req, res, next) => {

  try {


    const profile = await Profile.findOne({

      user:req.params.userId,

    })
    .populate(
      "user",
      "name email role"
    );



    if(!profile){

      return res.status(404).json({

        success:false,

        message:"Profile not found",

      });

    }



    res.status(200).json({

      success:true,

      profile,

    });



  } catch(error){

    next(error);

  }

};





module.exports = {

  saveProfile,

  getMyProfile,

  getProfileByUserId,

};