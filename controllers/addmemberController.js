const AddMember = require("../schema/addmemberModel");
const Member = require("../schema/memberModel");

exports.addMember = async (req, res) => {
  try {
    const { firstname, lastname, email, gender, membershipId, memberId } =
      req.body;
    const existingUserWithMembershipId = await Member.findOne({ membershipId });

    if (!existingUserWithMembershipId) {
      return res.status(400).json({
        error: "MembershipId is not correct",
      });
    }
    const newMember = new AddMember({
      firstname,
      lastname,
      email,
      gender,
      membershipId,
      memberId,
    });
    await newMember.save();

    res
      .status(201)
      .json({ message: "Member added successfully", data: newMember });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMembersByMembershipId = async (req, res) => {
    try {
      const { membershipId } = req.params;
      const members = await AddMember.find({ membershipId });
  
      if (members.length === 0) {
        return res.status(404).json({ message: "No members found with the provided membershipId" });
      }
  
      res.status(200).json({ data: members });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
exports.getAllMembers = async (req, res) => {
  try {
    const members = await AddMember.find();
    res.status(200).json({ data: members });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMemberById = async (req, res) => {
  try {
    const member = await AddMember.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.status(200).json({ data: member });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateMember = async (req, res) => {
  try {
    const { firstname, lastname, email, gender, membershipId, memberId } =
      req.body;
    const updatedMember = await AddMember.findByIdAndUpdate(
      req.params.id,
      {
        firstname,
        lastname,
        email,
        gender,
        membershipId,
        memberId,
      },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Member updated successfully", data: updatedMember });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteMember = async (req, res) => {
  try {
    const deletedMember = await AddMember.findByIdAndDelete(req.params.id);
    if (!deletedMember) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.status(200).json({ message: "Member deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
