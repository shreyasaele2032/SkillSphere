const express = require("express");
const router = express.Router();

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

const {
  getAllUsers,
  getUserById,
  deleteUser,
} = require("../controllers/adminController");



router.get(
  "/users",
  getAllUsers
);

router.delete(
  "/users/:id",
  protect,
  authorize("admin"),
  deleteUser
);


router.get(
  "/users/:id",
  getUserById
);



module.exports = router;