import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const VisitorSchema =
  mongoose.models.visitorSchema ||
  mongoose.model("visitorModel", visitorSchema);

export default VisitorSchema;
