
const express = require("express");

const router = express.Router();

const {
  protect,
} = require(
  "../middleware/authMiddleware"
);

const {
  evaluateAnswer,
} = require(
  "../controllers/interviewController"
);


// Interview Route
router.post(
  "/evaluate",
  protect,
  evaluateAnswer
);


module.exports = router;
