const { Member } = require("../schema/memberModel");

const memberController = {
  createMember: async (req, res) => {
    try {
      const { fullName, gender } = req.body;
      const newMember = new Member({ fullName, gender });
      await newMember.save();
      res
        .status(201)
        .json({ message: "Member created successfully", member: newMember });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getAllMembers: async (req, res) => {
    try {
      const members = await Member.find();
      res.status(200).json(members);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },


  getMemberById: async (req, res) => {
    try {
      const member = await Member.findById(req.params.id);
      if (!member) {
        return res.status(404).json({ message: "Member not found" });
      }
      res.status(200).json(member);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  updateMemberById: async (req, res) => {
    try {
      const { fullName, gender, dateOfBirth, image } = req.body;
      const updatedMember = await Member.findByIdAndUpdate(
        req.params.id,
        { fullName, gender, dateOfBirth, image },
        { new: true }
      );
      if (!updatedMember) {
        return res.status(404).json({ message: "Member not found" });
      }
      res.status(200).json({
        message: "Member updated successfully",
        member: updatedMember,
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  
  deleteMemberById: async (req, res) => {
    try {
      const deletedMember = await Member.findByIdAndDelete(req.params.id);
      if (!deletedMember) {
        return res.status(404).json({ message: "Member not found" });
      }
      res.status(200).json({ message: "Member deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = memberController;
