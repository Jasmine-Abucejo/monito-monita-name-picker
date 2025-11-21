import mongoose from "mongoose";

const participantSchema = mongoose.Schema({
  participantName: {
    type: String,
    required: true,
  },
  drawn: {
    type: Boolean,
    default: false,
  },
});

const Participant = mongoose.model("Participant", participantSchema);
export default Participant;
