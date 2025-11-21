import express from "express";
import {
  updateParticipantStatus,
  getParticipants,
} from "../controllers/participantControllers.js";

const router = express.Router();

router.get("/", getParticipants);
router.put("/", updateParticipantStatus);

export default router;
