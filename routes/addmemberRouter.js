// routes/addMemberRoutes.js
const express = require("express");
const router = express.Router();
const addMemberController = require("../controllers/addmemberController");

router.post("/addMember", addMemberController.addMember);

router.get("/getAllMembers", addMemberController.getAllMembers);

router.get("/membersByMembershipId/:membershipId", addMemberController.getMembersByMembershipId);
router.get("/getMemberById/:id", addMemberController.getMemberById);

router.put("/updateMember/:id", addMemberController.updateMember);

router.delete("/deleteMember/:id", addMemberController.deleteMember);

module.exports = router;
