import mongoose from "mongoose";
import Participant from "../models/ParticipantDetails.js";

export const updateParticipantStatus = async (req, res) => {
  const { participantId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(participantId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid request id.",
    });
  }

  try {
    const updatedParticipantStatus = await Participant.findByIdAndUpdate(
      participantId,
      { $set: { drawn: true } },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated status",
      data: updatedParticipantStatus,
    });
  } catch (error) {
    res.status(500).json({
      successs: false,
      message: "Server Error",
    });
  }
};

export const updateParticipantEligibility = async (req, res) => {
  const { participantId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(participantId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid request id.",
    });
  }

  try {
    const updatedParticipantEligibility = await Participant.findByIdAndUpdate(
      participantId,
      { $set: { allowed: false } },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully cancelled participant eligibility",
      data: updatedParticipantEligibility,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error in updataing participant eligibility",
      error: error,
    });
  }
};

export const getParticipants = async (req, res) => {
  try {
    const allParticipants = await Participant.find();
    res.status(200).json({
      success: true,
      message: "Successfully fetched all participant names",
      data: allParticipants,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Sever error in fetching participant names",
    });
  }
};
