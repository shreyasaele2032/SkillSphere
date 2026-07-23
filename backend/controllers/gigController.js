

const Gig = require("../models/Gig");




const createGig = async (req, res, next) => {
  try {

    const {
      title,
      category,
      description,
      price,
      deliveryTime,
      skills,
      location,
      images,
    } = req.body;


    const gig = await Gig.create({
      freelancer: req.user._id,
      title,
      category,
      description,
      price,
      deliveryTime,
      skills,
      location,
      images,
    });


    res.status(201).json({
      success: true,
      message: "Gig created successfully",
      gig,
    });


  } catch (error) {
    next(error);
  }
};






const getGigs = async (req, res, next) => {
  try {

    const gigs = await Gig.find({
      status: "active",
    })
      .populate(
        "freelancer",
        "name profileImage skills rating"
      )
      .sort({
        createdAt: -1,
      });


    res.status(200).json({
      success: true,
      count: gigs.length,
      gigs,
    });


  } catch (error) {
    next(error);
  }
};





const searchGigs = async (req, res, next) => {
  try {

    const { category } = req.query;

    if (!category) {
      return res.status(400).json({
        success: false,
        message: "Category is required",
      });
    }

    const gigs = await Gig.find({
  status: "active",
  $or: [
    {
      category: {
        $regex: category,
        $options: "i",
      },
    },
    {
      title: {
        $regex: category,
        $options: "i",
      },
    },
    {
      skills: {
        $elemMatch: {
          $regex: category,
          $options: "i",
        },
      },
    },
  ],
})
      .populate(
        "freelancer",
        "name profileImage rating skills"
      )
      .sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      count: gigs.length,
      gigs,
    });

  } catch (error) {
    next(error);
  }
};






const getGigById = async (req, res, next) => {
  try {

    const gig = await Gig.findById(
      req.params.id
    ).populate(
      "freelancer",
      "name email profileImage skills rating bio"
    );


    if (!gig) {
      return res.status(404).json({
        success: false,
        message: "Gig not found",
      });
    }


    res.status(200).json({
      success: true,
      gig,
    });


  } catch (error) {
    next(error);
  }
};







const updateGig = async (req, res, next) => {
  try {

    let gig = await Gig.findById(
      req.params.id
    );


    if (!gig) {
      return res.status(404).json({
        success: false,
        message: "Gig not found",
      });
    }


    // Check ownership
    if (
      gig.freelancer.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message: "Not authorized",
      });
    }


    gig = await Gig.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );


    res.status(200).json({
      success: true,
      message: "Gig updated successfully",
      gig,
    });


  } catch (error) {
    next(error);
  }
};







const deleteGig = async (req, res, next) => {
  try {

    const gig = await Gig.findById(
      req.params.id
    );


    if (!gig) {
      return res.status(404).json({
        success: false,
        message: "Gig not found",
      });
    }


    if (
      gig.freelancer.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message: "Not authorized",
      });
    }


    await gig.deleteOne();


    res.status(200).json({
      success: true,
      message: "Gig deleted successfully",
    });


  } catch (error) {
    next(error);
  }
};








const getMyGigs = async (req, res, next) => {
  try {

    const gigs = await Gig.find({
      freelancer: req.user._id,
    });


    res.status(200).json({
      success: true,
      gigs,
    });


  } catch (error) {
    next(error);
  }
};



module.exports = {
  createGig,
  getGigs,
  searchGigs,
  getGigById,
  updateGig,
  deleteGig,
  getMyGigs,
};