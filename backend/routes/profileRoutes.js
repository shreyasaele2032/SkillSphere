const express = require("express");

const router = express.Router();

const {
  saveProfile,
  getMyProfile,
  getProfileByUserId,
} = require("../controllers/profileController");

const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");


router.get("/me", protect, getMyProfile);


router.put(
  "/",
  protect,
  upload.single("resume"),
  saveProfile
);


router.get("/:userId", getProfileByUserId);

module.exports = router;