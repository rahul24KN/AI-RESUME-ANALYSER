
const express = require("express");

const router = express.Router();

const {
  protect,
} = require(
  "../middleware/authMiddleware"
);

const {
  getAllCandidates,
  updateCandidateStatus,
} = require(
  "../controllers/recruiterController"
);


// GET ALL CANDIDATES
router.get(
  "/candidates",
  protect,
  getAllCandidates
);


// UPDATE CANDIDATE STATUS
router.put(
  "/candidate/:id",
  protect,
  updateCandidateStatus
);


module.exports = router;
