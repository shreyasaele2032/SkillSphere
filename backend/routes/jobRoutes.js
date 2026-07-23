

const express = require("express");


const router = express.Router();

router.use((req, res, next) => {
  console.log("JOB ROUTER:", req.method, req.originalUrl);
  next();
});


const {
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
} = require("../controllers/jobController");


const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

router.get("/test", (req, res) => {
  res.json({ message: "Job Routes Working" });
});

router.get(
  "/",
  getJobs
);

router.get(
  "/my-jobs",
  protect,
  authorize("client"),
  getMyJobs
);

router.get(
  "/applications/all",
  protect,
  authorize("client"),
  getAllApplications
);

router.get(
  "/my-applications",
  protect,
  getMyApplications
);

router.get(
  "/:id/applications",
  protect,
  authorize("client"),
  getJobApplications
);

router.get(
  "/:id",
  getJobById
);


router.post(
  "/",
  protect,
  authorize("client"),
  createJob
);




router.put(
  "/:id/apply",
  protect,
  authorize("freelancer"),
  applyJob
);




router.put(
  "/:id/select/:freelancerId",
  protect,
  authorize("client"),
  selectFreelancer
);




router.put(
  "/:id/status",
  protect,
  updateJobStatus
);



module.exports = router;