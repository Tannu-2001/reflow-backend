import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  email: { type: String, required: true, trim: true },
  budget: { type: String, default: "" },
  phone: { type: String, required: true, trim: true},
  message: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Contact", ContactSchema);