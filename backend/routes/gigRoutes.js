

const express = require("express");

const router = express.Router();

const {
  createGig,
  getGigs,
  getGigById,
  updateGig,
  deleteGig,
  getMyGigs,
  searchGigs,
} = require("../controllers/gigController");


const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");



router.post(
  "/",
  protect,
  authorize("freelancer"),
  createGig
);



router.get(
  "/",
  getGigs
);



router.get(
  "/my-gigs",
  protect,
  authorize("freelancer"),
  getMyGigs
);



router.get(
  "/search",
  searchGigs
);



router.get(
  "/:id",
  getGigById
);



router.put(
  "/:id",
  protect,
  authorize("freelancer"),
  updateGig
);



router.delete(
  "/:id",
  protect,
  authorize("freelancer"),
  deleteGig
);


module.exports = router;