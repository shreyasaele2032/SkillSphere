

const express = require("express");

const router = express.Router();

const {
  getProfile,
  getUserById,
  updateProfile,
  getFreelancers,
} = require("../controllers/userController");

const {
  protect,
} = require("../middleware/authMiddleware");



router.get(
  "/profile",
  protect,
  getProfile
);



router.put(
  "/profile",
  protect,
  updateProfile
);



router.get(
  "/freelancers",
  getFreelancers
);



router.get(
  "/:id",
  getUserById
);


module.exports = router;