const mongoose = require("mongoose");

const AddMemberSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  membershipId: { type: String, required: true },
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
    required: true,
  },
});

const AddMember = mongoose.model("AddMember", AddMemberSchema);

module.exports = AddMember;
