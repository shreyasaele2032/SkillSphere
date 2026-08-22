

const Milestone = require("../models/Milestone");



const createMilestone = async (req, res, next) => {
  try {

    const {
      job,
      freelancer,
      title,
      description,
      amount,
      dueDate,
    } = req.body;


    const milestone = await Milestone.create({
      job,
      client: req.user._id,
      freelancer,
      title,
      description,
      amount,
      dueDate,
    });


    res.status(201).json({
      success: true,
      message: "Milestone created successfully",
      milestone,
    });


  } catch (error) {
    next(error);
  }
};






const getMilestones = async (req, res, next) => {
  try {

    const milestones = await Milestone.find({
      $or: [
        {
          client: req.user._id,
        },
        {
          freelancer: req.user._id,
        },
      ],
    })
      .populate(
        "job",
        "title"
      )
      .populate(
        "client",
        "name"
      )
      .populate(
        "freelancer",
        "name"
      );


    res.status(200).json({
      success: true,
      milestones,
    });


  } catch(error) {
    next(error);
  }
};









const updateMilestoneStatus = async (
  req,
  res,
  next
) => {

  try {

    const {
      status,
    } = req.body;


    const milestone =
      await Milestone.findById(
        req.params.id
      );


    if (!milestone) {
      return res.status(404).json({
        success:false,
        message:"Milestone not found",
      });
    }





    if (
      milestone.client.toString() !== req.user._id.toString() &&
      milestone.freelancer.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({
        success:false,
        message:"Not authorized",
      });
    }



    milestone.status = status;


    await milestone.save();



    res.status(200).json({
      success:true,
      message:"Milestone updated",
      milestone,
    });



  } catch(error) {
    next(error);
  }

};










const submitMilestone = async (
  req,
  res,
  next
) => {

  try {

    const milestone =
      await Milestone.findById(
        req.params.id
      );


    if (!milestone) {
      return res.status(404).json({
        success:false,
        message:"Milestone not found",
      });
    }



    if (
      milestone.freelancer.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        success:false,
        message:"Only freelancer can submit work",
      });
    }



    milestone.status = "Submitted";


    await milestone.save();



    res.status(200).json({
      success:true,
      message:"Work submitted successfully",
      milestone,
    });



  } catch(error) {
    next(error);
  }

};









const approveMilestone = async (
  req,
  res,
  next
) => {

  try {

    const milestone =
      await Milestone.findById(
        req.params.id
      );


    if (!milestone) {
      return res.status(404).json({
        success:false,
        message:"Milestone not found",
      });
    }



    if (
      milestone.client.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        success:false,
        message:"Only client can approve",
      });
    }



    milestone.status = "Approved";


    await milestone.save();



    res.status(200).json({
      success:true,
      message:"Milestone approved",
      milestone,
    });



  } catch(error) {
    next(error);
  }

};





module.exports = {
  createMilestone,
  getMilestones,
  updateMilestoneStatus,
  submitMilestone,
  approveMilestone,
};