const mongoose = require("mongoose");

const generateNumericId = () => {
  const digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let numericId = "";

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    numericId += digits.charAt(randomIndex);
  }

  return numericId;
};

const MemberSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  gender: { type: String, required: true },
  membershipId: { type: String, unique: true, default: generateNumericId },
});

const Member = mongoose.model("Member", MemberSchema);

module.exports = Member;

