const express = require("express");
const router = express.Router();
const memberController = require("../controllers/memberController");

router.post("/members", memberController.createMember);
router.get("/members", memberController.getAllMembers);
router.get("/members/:id", memberController.getMemberById);
router.put("/members/:id", memberController.updateMemberById);
router.delete("/members/:id", memberController.deleteMemberById);

module.exports = router;
