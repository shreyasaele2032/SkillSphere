

const Job = require("../models/Job");




const createJob = async (req, res, next) => {
  try {

    const {
      title,
      description,
      category,
      budget,
      experienceLevel,
      duration,
      skillsRequired,
      location,
      deadline,
    } = req.body;


    const job = await Job.create({
      client: req.user._id,
      title,
      description,
      category,
      budget,
      experienceLevel,
      duration,
      skillsRequired,
      location,
      deadline,
    });


    res.status(201).json({
      success: true,
      message: "Job created successfully",
      job,
    });


  } catch (error) {
    next(error);
  }
};







const getJobs = async (req, res, next) => {
  try {

    const jobs = await Job.find({
      status: "open",
    })
      .populate(
        "client",
        "name profileImage"
      )
      .sort({
        createdAt: -1,
      });


    res.status(200).json({
      success: true,
      count: jobs.length,
      jobs,
    });


  } catch (error) {
    next(error);
  }
};








const getJobById = async (req, res, next) => {
  try {

    const job = await Job.findById(
      req.params.id
    )
      .populate(
        "client",
        "name email profileImage"
      )
      .populate(
  "applicants.freelancer",
  "name email skills rating profileImage"
);


    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }


    res.status(200).json({
      success: true,
      job,
    });


  } catch (error) {
    next(error);
  }
};








const applyJob = async (req, res, next) => {
  try {

    const job = await Job.findById(req.params.id);


    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }
    console.log(job.applicants);


    // Check already applied
    const alreadyApplied = job.applicants.some(
  (application) =>
    application.freelancer &&
    application.freelancer.toString() === req.user._id.toString()
);


    if (alreadyApplied) {
      return res.status(400).json({
        success: false,
        message: "Already applied for this job",
      });
    }

console.log("===== APPLY JOB =====");
console.log("req.user:", req.user);
console.log("req.user._id:", req.user?._id);
console.log("req.body:", req.body);
    // Store application details

    job.applicants.push({

      freelancer: req.user._id,

      name: req.body.name,

      email: req.body.email,

      phone: req.body.phone,

      portfolio: req.body.portfolio,

      coverLetter: req.body.coverLetter,

    });
console.log("Applicants:", job.applicants);

    await job.save();


    res.status(200).json({
      success: true,
      message: "Application submitted successfully",
    });


  } catch (error) {
    next(error);
  }
};

const getJobApplications = async (req,res,next)=>{

  try{

    const job = await Job.findById(req.params.id)
    .populate(
      "applicants.freelancer",
      "name email skills rating profileImage"
    );


    if(!job){

      return res.status(404).json({
        success:false,
        message:"Job not found"
      });

    }



   

    if(
      job.client.toString() !== req.user._id.toString()
    ){

      return res.status(403).json({
        success:false,
        message:"Not authorized"
      });

    }



    res.status(200).json({

      success:true,

      applications: job.applicants

    });


  }catch(error){

    next(error);

  }

};

const getAllApplications = async (req, res, next) => {
  try {
    console.log("getAllApplications called");
    console.log("Logged in user:", req.user);

    const jobs = await Job.find({
      client: req.user._id,
    }).populate(
      "applicants.freelancer",
      "name email skills rating profileImage"
    );

    console.log("Jobs found:", jobs.length);

    let applications = [];

    jobs.forEach((job) => {
      console.log(job.title, job.applicants.length);

      job.applicants.forEach((application) => {

  if (!application.freelancer) {
    return;
  }

  applications.push({
    jobId: job._id,
    jobTitle: job.title,
    freelancer: {
      _id: application.freelancer._id,
      name: application.freelancer.name,
      email: application.freelancer.email,
    },
    name: application.name,
    email: application.email,
    phone: application.phone,
    portfolio: application.portfolio,
    coverLetter: application.coverLetter,
    status: application.status,
  });

});
    });

    console.log("Applications found:", applications.length);

    res.status(200).json({
      success: true,
      applications,
    });

  } catch (error) {
    next(error);
  }
};









const selectFreelancer = async (
  req,
  res,
  next
) => {

  try {

    const job = await Job.findById(
      req.params.id
    );


    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }



    // Check job owner
    if (
      job.client.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message: "Not authorized",
      });
    }



    job.selectedFreelancer =
      req.params.freelancerId;


    job.status = "in-progress";
    job.applicants.forEach((app) => {
  if (
    app.freelancer &&
    app.freelancer.toString() === req.params.freelancerId
  ) {
    app.status = "accepted";
  } else {
    app.status = "rejected";
  }
});

    await job.save();



    res.status(200).json({
      success: true,
      message: "Freelancer selected successfully",
      job,
    });



  } catch(error) {
    next(error);
  }

};











const getMyJobs = async (
  req,
  res,
  next
) => {

  try {

    const jobs = await Job.find({
      client: req.user._id,
    });


    res.status(200).json({
      success: true,
      jobs,
    });


  } catch(error) {
    next(error);
  }

};



const getMyApplications = async (req, res, next) => {
  try {

    const jobs = await Job.find({
      "applicants.freelancer": req.user._id
    }).populate(
      "client",
      "name email profileImage"
    );

    const applications = [];

    jobs.forEach((job) => {

      const application = job.applicants.find(
        (app) =>
          app.freelancer.toString() ===
          req.user._id.toString()
      );

      if (application) {
        applications.push({
          _id: application._id,
          jobId: job._id,
          title: job.title,
          category: job.category,
          budget: job.budget,
          status: application.status,
          client: {
            _id: job.client._id,
            name: job.client.name,
            email: job.client.email,
            profileImage: job.client.profileImage,
          },
        });
      }

    });

    res.status(200).json({
      success: true,
      applications,
    });

  } catch (error) {
    next(error);
  }
};







const updateJobStatus = async (
  req,
  res,
  next
) => {

  try {

    const job = await Job.findById(
      req.params.id
    );


    if (!job) {
      return res.status(404).json({
        success:false,
        message:"Job not found",
      });
    }


    job.status = req.body.status;


    await job.save();


    res.status(200).json({
      success:true,
      message:"Job status updated",
      job,
    });


  } catch(error) {
    next(error);
  }

};





module.exports = {
  createJob,
  getJobs,
  getJobById,
  applyJob,
  selectFreelancer,
  getMyJobs,
  updateJobStatus,
  getJobApplications,
  getAllApplications,
  getMyApplications
};