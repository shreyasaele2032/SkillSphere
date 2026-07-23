

const express = require("express");

const router = express.Router();


const {
  createMilestone,
  getMilestones,
  updateMilestoneStatus,
  submitMilestone,
  approveMilestone,
} = require("../controllers/milestoneController");


const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");




router.post(
  "/",
  protect,
  authorize("client"),
  createMilestone
);




router.get(
  "/",
  protect,
  getMilestones
);




router.put(
  "/:id/status",
  protect,
  updateMilestoneStatus
);




router.put(
  "/:id/submit",
  protect,
  authorize("freelancer"),
  submitMilestone
);




router.put(
  "/:id/approve",
  protect,
  authorize("client"),
  approveMilestone
);



module.exports = router;