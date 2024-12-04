import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    id: { type: String, required: true }, // Make sure the property name matches what you're using in your logic
    IDCard: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    classId: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);


